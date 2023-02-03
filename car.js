function Car(carName){
    this.carName = carName || 'Unknown car';
}
Car.prototype.logName = function () {
    console.log('Car Name is', this.carName);
};

exports = {
    Car: Car
}