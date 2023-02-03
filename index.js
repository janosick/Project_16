function Car(carName){
    this.carName = carName || 'Unknown car';
}
car.prototype.logName = function () {
    console.log('Car Name is', this.carName);
};

var bmw = new Car ('BMW');
bmw.logName();