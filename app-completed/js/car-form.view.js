(function(window, Backbone, _, carToolActions, Car) {

    var templateStr = `
        <div>
            <label for="make-input">Make</label>
            <input type="text" id="make-input" value="<%- make %>">
        </div>
        <div>
            <label for="model-input">Model</label>
            <input type="text" id="model-input" value="<%- model %>">
        </div>
        <div>
            <label for="year-input">Year</label>
            <input type="text" id="year-input" value="<%- year %>">
        </div>
        <div>
            <label for="color-input">Color</label>
            <input type="text" id="color-input" value="<%- color %>">
        </div>
        <button type="button" data-submit-car-action>Save Car</button>
    `;

    window.CarFormView = Backbone.View.extend({

        tagName: 'form',

        events: {
            'click [data-submit-car-action]': 'submitCar'
        },

        template: _.template(templateStr),

        render: function() {
            
            var view = this;

            if (!view.model) {
                view.model = new Car();
            }

            view.$el.html(view.template(view.model.attributes));

            return view;
        },

        submitCar: function() {

            var view = this;
        
            var car = new Car({
                make: $('#make-input').val(),
                model: $('#model-input').val(),
                year: $('#year-input').val(),
                color: $('#color-input').val(),
            });

            view.trigger(carToolActions.SUBMIT_CAR_FORM, car); 
        }

    });

})(window, Backbone, _, carToolActions, Car);