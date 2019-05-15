function Vehicle(name) {
    this.name = name;
}
Vehicle.prototype.start = function () {
    console.log(this.name + ' starting...');
}
Vehicle.prototype.stop = function () {
    console.log(this.name + ' stopping...');
}
Vehicle.prototype.fullname = function () {
    console.log(this.name);
}

module.exports = Vehicle;