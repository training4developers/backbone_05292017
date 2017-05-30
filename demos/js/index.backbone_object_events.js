var person = {};

_.extend(person, Backbone.Events);

var family = {};

_.extend(family, Backbone.Events);

function personBornEventHandler() {

    console.log('welcome to the family!');

}

// eventsObj = {
// };

// function on(eventName, eventHandler) {
//     eventsObj[eventName] = [];
//     eventsObj[eventName].push(eventHandler);
// }

// function trigger(eventName, eventData) {

//     eventsObj[eventName].forEach(function(eventHandler) {
//         eventHandler(eventData);
//     });

// }


family.listenToOnce(person, 'born', personBornEventHandler);

person.trigger('born');

//family.stopListening(person, 'born', personBornEventHandler);

person.trigger('born');
