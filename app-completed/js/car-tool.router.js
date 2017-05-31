(function(window, Backbone, carToolActions) {

    window.CarToolRouter = Backbone.Router.extend({
    
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