
var carTableViewTemplate = `
    <thead>
        <tr>
            <th><%- makeColumnLabel %></th>
            <th><%- modelColumnLabel %></th>
            <th><%- yearColumnLabel %></th>
            <th><%- colorColumnLabel %></th>
        </tr>
    </thead> 
    <tbody></tbody>
`;

var carModelRowTemplate = `
    <tr>
        <td><%- make %></td>
        <td><%- model %></td>
        <td><%- year %></td>
        <td><%- color %></td>
    </tr>
`;

var CarTableView = Backbone.View.extend({

    tagName: 'table',

    template: _.template(carTableViewTemplate),

    rowTemplate: _.template(carModelRowTemplate),

    render: function() {

        var view = this;

        var context = {
            makeColumnLabel: 'Make',
            modelColumnLabel: 'Model',
            yearColumnLabel: 'Year',
            colorColumnLabel: 'Color',
        };

        console.log(view.template(context));
        view.$el.html(view.template(context));

        var tBody = view.$el.find('tbody');

        view.collection.forEach(function(car) {
            tBody.append(view.rowTemplate(car.attributes));
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
