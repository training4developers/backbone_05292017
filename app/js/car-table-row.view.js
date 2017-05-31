(function(window, Backbone, carToolActions) {

    var templateStr = `
        <td><%- make %></td>
        <td><%- model %></td>
        <td><%- year %></td>
        <td><%- color %></td>
        <td><button type="button" data-delete-car-row-action>Delete</button></td>
    `;

    window.CarTableRow = Backbone.View.extend({

        tagName: 'tr',

        // review the code in this file, and write the code to wire up the
        // event handler for deleting a car row

        template: _.template(templateStr),

        render: function() {
            var view = this;
            view.$el.append(view.template(view.model.attributes));
            return view;
        },

        deleteCarRow: function() {
            var view = this;

            // write the code to trigger the delete car row action passing
            // in the car id as the event data
        }
    });

})(window, Backbone, carToolActions);