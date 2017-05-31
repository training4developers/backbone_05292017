(function(window, Backbone, Car) {

    window.Cars = Backbone.Collection.extend({
        url: 'http://localhost:3000/cars',
        model: Car
    });

})(window, Backbone, Car);