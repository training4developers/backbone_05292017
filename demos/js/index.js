
var Widget = Backbone.Model.extend({

    urlRoot: 'http://localhost:3000/widgets',

    defaults: {
        id: 0,
        name: '',
        description: '',
        color: '',
        size: '',
        quantity: 0,
        price: 0
    }
});

var widget = new Widget({ id: 2 });
widget.fetch({
    success: function() { 
        console.log(JSON.stringify(widget.attributes));
    }
});
console.log(JSON.stringify(widget.attributes));

var Widgets = Backbone.Collection.extend({
    url: 'http://localhost:3000/widgets',
    model: Widget
});

var widgets = new Widgets();
widgets.fetch({
    success: function() {
        console.log(widgets.models);
    }
});

