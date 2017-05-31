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

        events: {
            'click [data-delete-car-row-action]': 'deleteCarRow'
        },

        template: _.template(templateStr),

        render: function() {
            var view = this;
            view.$el.append(view.template(view.model.attributes));
            return view;
        },

        deleteCarRow: function() {
            var view = this;

            view.trigger(carToolActions.DELETE_CAR_ROW, view.model.id);
        }
    });

})(window, Backbone, carToolActions);