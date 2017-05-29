'use strict';

function outer() {

    var t = 2;

    setTimeout(function() {
        t = 4;
    }, 2000);

    function inner() {
        console.log(t);
    }

    return inner;
    // console.dir(inner);
}

var fn = outer();
fn();

setTimeout(function() {
    fn();
}, 3000);

