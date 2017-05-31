function getMyPosition() {

    return new Promise(function(resolve, reject) {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                resolve(position);
            });
        } else {
            reject("Geolocation is not supported by this browser.");
        }

    });
}

getMyPosition().then(function(position) {
    console.log(position);
});