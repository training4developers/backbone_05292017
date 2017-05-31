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

        // review the code in this file, and write the code to wire up the
        // event handler for switching to the add car form

        template: _.template(templateStr),

        render: function() {

            var view = this;

            view.$el.html(view.template());

            var tBody = view.$el.find('tbody');

            if (view.collection && view.collection.length > 0) {
                view.collection.forEach(function(car) {
                    var carTableRow = new CarTableRow({ model: car });

                    // wire up the car table view to list for the delete car row event
                    // on the car table row view
                    // when the event is received from the car table row, have the car table view
                    // trigger the same event using the car id passed from the car table row view

                    tBody.append(carTableRow.render().$el);
                });
            } else {
                tBody.append('<td colspan="5">No car data.</td>');
            }

            return view;
        },

        addCar: function() {

            // write the code to trigger the event to show the car form
        }

    });

})(window, Backbone, _, carToolActions, CarTableRow);