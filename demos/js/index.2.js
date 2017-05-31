var CarFormView = Backbone.View.extend({

    events: {
        'click [data-save-action]': 'save',
        'click #cancel-button': 'cancel'
    },

    render: function() {
        this.$el.html(`
            <button data-save-action id="save-button" class="save" type="button">Save</button>
            <button id="cancel-button" type="button">Cancel</button>
            <div data-save-action>Click Me to Save</div>
        `);
        return this;
    },

    save: function() {
        console.log('save');
    },

    cancel: function() {
        console.log('cancel');
    }
});

var carFormView = new CarFormView();
$('main').append(carFormView.render().$el);

// carFormView.undelegateEvents();
// carFormView.delegateEvents();

//carFormView.remove();

