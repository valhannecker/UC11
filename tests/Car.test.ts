import {Garage} from "../src/Garage"
import {Car} from "../src/Car"

const car = new Car("Toyota", "Corolla", 2025);
const car2 = new Car("Ford", "Mustang", 2025);
const car3 = new Car("Honda", "Civic", 2025);

const garage = new Garage();
garage.addCar(car)
garage.addCar(car2)
garage.addCar(car3)

garage.getCarCount

