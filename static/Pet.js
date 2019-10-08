class Pet {
    constructor(name, age, type) {
        this.name = name || "Bob";
        this.age = age || 99;
        this.type = type || "robot";
    }

    sayHello() {
        return `Hello I'm ${this.name} and I'm ${this.age} years old`;
    }

}

module.exports = [
    new Pet(),
    new Pet("HAL9000", 100, "robot"),
    new Pet("T-800", 30, "robot")
];