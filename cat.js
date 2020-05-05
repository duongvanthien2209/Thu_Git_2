function Cat(name, age) {
    this.name = name;
    this.age = age;
}

Cat.prototype.say = function() {
    console.log('Hello');
}

module.exports = Cat;