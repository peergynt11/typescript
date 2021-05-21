import { Observable, of, timer, pipe } from 'rxjs'
import {take, map, } from 'rxjs/operators'

let temp11 = () =>  {console.log('xx')}

function callback():Observable<any> {
let ob$ = timer(1000, 1000)
// let ob: number[] = [1,2,3,4,5,6,7,8,9,10]
    console.log('timer initiated');
    return ob$;
}

function caller1(pCallback: any) {
    pCallback().subscribe( 
        (value: any) => {console.log('caller1 '+value)},
        (err: any) => console.log(err),
        () => {console.log('Caller1 completed !!!')}    
    );
    console.log('caller1 subscription completed')
}

function caller2(pCallback: any) {
    const onlyfive  = pCallback().pipe(take(5));    
    onlyfive.subscribe( 
        (value) => {console.log('caller2 '+value)},
        null,
        () => {console.log('Caller2 completed')}
    
    );  
    onlyfive.subscribe( (value) => {console.log('caller3 '+value)});  
    console.log('caller2,3 subscription completed')
}

// temp13(temp11)
caller1(callback);
caller2(callback);
console.log('App completed')
