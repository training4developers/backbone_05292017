var t = 'hello world!';

console.log(typeof t);

t = 4;

console.log(typeof t);

t = true;

console.log(typeof t);

//LISP Property Lists

t = {
    id: 2,
    name: 'Bob',
    age: 32,
    getInfo: function() {
        return this.name + ' ' + this.age;
    }
};

console.log(typeof t);
console.log(t.getInfo());