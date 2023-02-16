var util = require('util');

function Car() {}

Car.prototype.logName = function () {
    console.log('This name is: ', this.name);
};

function BMW(name) {
    this.name = name || 'Unknown bmw model';
}

BMW.prototype.drive = function () {
    console.log('Im driving!');
};

util.inherits(BMW, Car);

var bmw = new BMW('X6');
bmw.logName();
bmw.drive();
