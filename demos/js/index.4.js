var Widget = Backbone.Model.extend({
    defaults: {
        name: '',
        description: '',
        color: '',
        size: '',
        quantity: 0
    }
});

var widget = new Widget({
    name: 'test', description: 'a test widget', color: 'red',
    size: 'small', quantity: 10
});

widget.on('change:name', function() {

    console.log('widget name changed');
});

console.log(widget.get('name'));
widget.set('name', 'test2');
console.log(widget.get('name'));
widget.set({
    size: 'medium',
    quantity: 20
});

