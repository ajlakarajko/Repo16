class Microsoft {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    set name(newName) {
        this.name = newName;
    }

    occupation() {
        return "{this.name} is a philantropist!";
    }
}

class Facebook extends Microsoft {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    get age() {
        return this.age;
    }

    set age(newAge) {
        this.age = newAge;
    }

    studentAge() {
        return "{this.name} is {this.age}";
    }
}

const henry = new Microsoft("William Henry Gates III");
const elliot = new Facebook("Mark Elliot Zuckerberg", 23);

henry.occupation();
elliot.occupation();
elliot.studentAge();

module.exports = {
    Microsoft,
    Facebook
}
