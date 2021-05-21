"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var temp11 = function () { console.log('xx'); };
function callback() {
    var ob$ = rxjs_1.timer(1000, 1000);
    // let ob: number[] = [1,2,3,4,5,6,7,8,9,0]
    console.log('timer initiated');
    return ob$;
}
function caller1(pCallback) {
    pCallback().subscribe(function (value) { console.log('caller1 ' + value); }, function (err) { return console.log(err); }, function () { console.log('Caller1 completed !!!'); });
    console.log('caller1 subscription completed');
}
function caller2(pCallback) {
    var onlyfive = pCallback().pipe(operators_1.take(5));
    onlyfive.subscribe(function (value) { console.log('caller2 ' + value); }, null, function () { console.log('Caller2 completed'); });
    onlyfive.subscribe(function (value) { console.log('caller3 ' + value); });
    console.log('caller2,3 subscription completed');
}
// temp13(temp11)
caller1(callback);
caller2(callback);
console.log('App completed');
