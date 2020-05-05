function Bird(name) {
    this.name = name;
}

Bird.prototype.sing = function() {
    console.log('Bird is singging');
}

module.exports = Bird;