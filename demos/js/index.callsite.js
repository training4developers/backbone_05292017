'use strict';

function doIt() {
    console.log(this);
}

// doIt();

// window.doIt();

var t = {
    id: 2,
    doIt: doIt
};

setTimeout(function() {
    t.doIt();
}, 3000);

// console.log(doIt === t.doIt);

