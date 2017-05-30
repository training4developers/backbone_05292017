
var Person = Backbone.Model.extend({

    defaults: {
        firstName: '',
        lastName: '',
        age: 0
    },

    getFullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }

});

var person = new Person({
    firstName: 'Justin',
    lastName: 'Trudeau',
    age: 45
});

console.log(person.getFullName());

