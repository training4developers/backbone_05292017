var CarFormView = Backbone.View.extend({

    events: {
        'click button': 'clickMe'
    },

    render: function() {
        this.$el.html('<button type="button">Save</button>');
        return this;
    },

    clickMe: function() {
        console.log('I was clicked!');
    }

});

var carFormView = new CarFormView();
$('main').append(carFormView.render().$el);

// carFormView.undelegateEvents();
// carFormView.delegateEvents();

//carFormView.remove();

//$('main').empty();