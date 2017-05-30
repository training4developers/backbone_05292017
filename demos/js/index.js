
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

var person1 = new Person({
    firstName: 'Justin',
    lastName: 'Trudeau',
    age: 45
});

var person2 = new Person({
    firstName: 'Andrew',
    lastName: 'Scheer',
    age: 38
});

console.log(person1 === person2);
console.log(person1.getFullName === person2.getFullName);
console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2));
console.dir(person1);
console.dir(person2);
console.log(person1.getFullName());
console.log(person2.getFullName());