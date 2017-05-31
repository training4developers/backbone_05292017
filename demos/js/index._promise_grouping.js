var p1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve('a');
    }, 2000);
});

var p2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve('b');
    }, 4000);
});

var p3 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve('c');
    }, 6000);
});

var p4 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve('d');
    }, 8000);
});

p1.then(function(result) {
    console.log(result);
});
p2.then(function(result) {
    console.log(result);
});
p3.then(function(result) {
    console.log(result);
});
p4 .then(function(result) {
    console.log(result);
});

Promise.all([p1,p2,p3,p4]).then(function() {
    console.log('all done');
});