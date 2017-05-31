
function askTheYoungLady() {

    return new Promise(function youngLady(resolve, reject) {

        setTimeout(function() {
            resolve('she is madly in love with him!');
        }, 2000);

    });

}

function findAPlaceToGetMarried() {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('found a place to get married!');
        }, 2000);
    });    
}


askTheYoungLady().then(function(result) {
    console.log(result);
    return findAPlaceToGetMarried();
}).then(function(result) {
    console.log(result);
}).catch(function(result) {
    console.log(result);
    console.log('rejected');
});

console.log('young man is waiting...');
