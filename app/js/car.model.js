(function(window, Backbone) {

    window.Car = Backbone.Model.extend({
    
        urlRoot: 'http://localhost:3000/cars',

        defaults: {
            make: '',
            model: '',
            year: 1900,
            color: ''
        },

    });

})(window, Backbone);