const Vehicle = require('./Vehicle');

function Aircraft(name) {
    Vehicle.apply(this, arguments);
}
Aircraft.prototype = Object.create(Vehicle.prototype);
Aircraft.prototype.fly = function() {
    console.log(this.name + ' flying...');
}

module.exports = Aircraft;