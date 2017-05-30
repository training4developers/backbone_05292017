var DemoView = Backbone.View.extend({

    tagName: 'ul',
    id: 'color-list',
    className: 'cool-colors',

    render: function() {

        var view = this;

        // this.collection.forEach(function(color) {
        //     view.$el.append($('<li>').text(color));
        // });

        for (var x=0; x < this.collection.length; x++) {
            this.$el.append($('<li>').text(this.collection[x]));
        }

        return view;
    }

});

var demoView = new DemoView({
    calgary: 'is south of Edmonton',
    model: 'red',
    collection: [ 'blue', 'green', 'purple' ]
});
$('main').append(demoView.render().$el);

console.log(demoView);