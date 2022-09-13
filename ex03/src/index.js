// only change code below this line
class Person {
    constructor(name) {
    this._name = name;
    }
    static display() {
    console.log("Statis method is invoked from Person class");
    }
    }
    Person.display();
// Only change code above this line
var message = new Person();
message.show();
module.exports = Person;