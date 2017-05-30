
var carTableViewTemplate = `
    <thead>
        <tr></tr>
    </thead> 
    <tbody></tbody>
`;

var carModelRowTemplate = `
    <td><%- make %></td>
    <td><%- model %></td>
    <td><%- year %></td>
    <td><%- color %></td>
`;

var CarTableColumnHeader = Backbone.View.extend({

    tagName: 'th',

    render: function() {
        this.$el.text(this.model);
        return this;
    }
});

var CarTableRow = Backbone.View.extend({

    tagName: 'tr',

    template: _.template(carModelRowTemplate),

    render: function() {
        var view = this;
        view.$el.append(view.template(view.model.attributes));
        return view;
    }
});

var CarTableView = Backbone.View.extend({

    tagName: 'table',

    template: _.template(carTableViewTemplate),


    render: function() {

        var view = this;

        view.$el.html(view.template());

        var trHeader = view.$el.find('thead > tr');

        var columnHeaders = [ 'Make', 'Model', 'Year', 'Color' ];

        columnHeaders.forEach(function(columnHeaderText) {

            var colHeaderView = new CarTableColumnHeader({
                model: columnHeaderText
            });

            trHeader.append(colHeaderView.render().$el);

        });

        var tBody = view.$el.find('tbody');

        view.collection.forEach(function(car) {

            var carTableRow = new CarTableRow({ model: car });
            tBody.append(carTableRow.render().$el);
        });

        return view;
    }

});

var carTableView = new CarTableView({
    id: 'car-table',
    collection: new Backbone.Collection([
        new Backbone.Model({ make: 'A', model: '1', year: 2000, color: 'blue' }),
        new Backbone.Model({ make: 'B', model: '2', year: 2001, color: 'red' }),
        new Backbone.Model({ make: 'C', model: '3', year: 2002, color: 'yellow' }),
    ])
});

$('main').append(carTableView.render().$el);
