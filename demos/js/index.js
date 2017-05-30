// var Person = Backbone.Model.extend({ 
// });

// var person1 = new Backbone.Model({
//     firstName: 'Bob'
// });

var People = Backbone.Collection.extend({});

var people = new People();

people.add(new Backbone.Model({ id: 1, name: 'Thor', source: 'mythology' }));
people.add(new Backbone.Model({ id: 2, name: 'Wolverine', source: 'comics' }));
people.add(new Backbone.Model({ id: 3, name: 'Erradicator', source: 'comics' }));

var person = people.findWhere({ name: 'Erradicator' });

console.log(person);

people.remove(person.id);

people.remove(person);

people.each(function(person) {
    console.log(person.cid);
    console.log(person.id);
});

// var comicPeople = people.filter(function(person) {
//     if (person.get('source') === 'comics') {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.dir(comicPeople);

// var peopleNames = people.map(function(person) {
//     return person.get('name').toUpperCase();
// });
// console.log(peopleNames);

//console.dir(people);