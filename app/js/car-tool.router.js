(function(window, Backbone, carToolActions) {

    window.CarToolRouter = Backbone.Router.extend({

        // create an add car route
        // url should be 'add-car'
        // the function associated with the route should
        // trigger the show car form event

        // index.html#/add-car

        routes: {
            '': 'showCarTable',
            'add-car': 'showCarForm'
        },

        showCarTable: function() {
            this.trigger(carToolActions.SHOW_CAR_TABLE);
        },

        showCarForm: function() {
            this.trigger(carToolActions.SHOW_CAR_FORM);
        }

    });

})(window, Backbone, carToolActions);