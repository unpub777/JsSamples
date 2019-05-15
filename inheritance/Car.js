const Vehicle = require('./Vehicle');

function Car(name, model) {
    Vehicle.apply(this, arguments);
    this.model = model;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.fullname = function() {
    console.log(this.name + ' : ' + this.model);
}

module.exports = Car;