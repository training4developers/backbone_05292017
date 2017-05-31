(function(window, Backbone, _, carToolActions, CarTableRow) {

    var templateStr = `
        <table>
        <thead>
            <tr>
                <td>Make</td>
                <td>Model</td>
                <td>Year</td>
                <td>Color</td>
                <td>Action</td>
            </tr>
        </thead> 
        <tbody></tbody>
        </table>
        <button type="button" data-add-car-action>Add Car</button>
    `;

    window.CarTableView = Backbone.View.extend({

        tagName: 'div',

        events: {
            'click [data-add-car-action]': 'addCar'
        },

        template: _.template(templateStr),

        render: function() {

            var view = this;

            view.$el.html(view.template());

            var tBody = view.$el.find('tbody');

            if (view.collection && view.collection.length > 0) {
                view.collection.forEach(function(car) {
                    var carTableRow = new CarTableRow({ model: car });

                    view.listenTo(carTableRow, carToolActions.DELETE_CAR_ROW, function(carId) {
                        view.trigger(carToolActions.DELETE_CAR_ROW, carId);
                    });

                    tBody.append(carTableRow.render().$el);
                });
            } else {
                tBody.append('<td colspan="5">No car data.</td>');
            }

            return view;
        },

        addCar: function() {
            this.trigger(carToolActions.SHOW_CAR_FORM);
        }

    });

})(window, Backbone, _, carToolActions, CarTableRow);