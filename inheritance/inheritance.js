const Vehicle = require('./Vehicle');
const Car = require('./Car');
const Aircraft = require('./Aircraft');

var vehicles = [];
vehicles.push(new Vehicle('abstract vehicle'));
vehicles.push(new Car('auto', 'kalina'));
vehicles.push(new Aircraft('an-42',));

vehicles.forEach(value => {
    value.fullname();
    value.start();
    if (value instanceof Aircraft) {
        value.fly();
    }
})

Vehicle.prototype.start = function() {
    console.log(this.name + " broking...");
}

vehicles.forEach(value => {
    value.fullname();
    value.start();
    if (value instanceof Aircraft) {
        value.fly();
    }
})