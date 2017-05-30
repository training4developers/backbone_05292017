var CarTableView = Backbone.View.extend({

    tagName: 'table',

    render: function() {

        var view = this;

        var columnHeaderRow = $('<tr>');
        columnHeaderRow.append($('<th>').text('Make'));
        columnHeaderRow.append($('<th>').text('Model'));
        columnHeaderRow.append($('<th>').text('Year'));
        columnHeaderRow.append($('<th>').text('Color'));
        
        var tHead = $('<thead>');
        tHead.append(columnHeaderRow);

        var tBody = $('<tbody>');

        view.collection.forEach(function(car) {
            
            var modelRow = $('<tr>');
            modelRow.append($('<td>').text(car.get('make')));
            modelRow.append($('<td>').text(car.get('model')));
            modelRow.append($('<td>').text(car.get('year')));
            modelRow.append($('<td>').text(car.get('color')));
            tBody.append(modelRow);

        });

        view.$el.append(tHead).append(tBody);

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
