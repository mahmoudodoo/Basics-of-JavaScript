
// Creating an object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    greet: function() {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    }
};

console.log(person.firstName); // John
person.greet(); // Hello, John Doe

// Working with JSON
const personJSON = JSON.stringify(person);
console.log(personJSON); // Stringified JSON

const personObj = JSON.parse(personJSON);
console.log(personObj); // Parsed back to JavaScript object
