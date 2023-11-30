//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

//Added Car class that extends vehicle class
class Car extends VehicleModule.Vehicle{
    constructor(make,model,year,color,mileage) {
        super(make,model,year,color,mileage)
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if (this.passengers < this.maximumPassengers){
            if ((num + this.passengers) <= this.maximumPassengers){
                this.passengers = num;
                return this.passengers;
            } else {
                console.log(this.model + ' ' + this.make + ' not enough room ')
            }
        } else {
            console.log(this.model + ' ' + this.make + ' is full')
        }
    }
    start() {
        if(this.fuel > 0){
            console.log('The Engine has started')
            return this.start = true;
        } else{
            console.log('There is not enough fuel')
            return this.start = false;
        }
    }
    checkService(){
        if (this.mileage > 30000) {
            this.scheduleService = true;
            console.log('Service has been scheduled')
            return this.scheduleService;
        }
    }

}










//TO DO: Creating Instances and Testing Them

let newCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)
let dreamCar = new Car('toyota', 'ae86', '1983', 'white', 180000)

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
newCar.start()
newCar.loadPassenger(3)
newCar.stop()
newCar.checkService()

dreamCar.start()
dreamCar.loadPassenger(40)
dreamCar.stop()
dreamCar.checkService()
