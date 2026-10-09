import { Car } from "./Car";

export class Garage {
    private cars: Car[] = [];

    constructor() {this.cars = [];}

        public addCar(car: Car): void {
            this.cars.push(car);
            car.setStored(true);
    }

        public removeCar(car: Car): void {
        const index = this.cars.indexOf(car);

            if (index !== -1) {
                this.cars.splice(index, 1);
                car.setStored(false);
            }
    }

        public getCarCount(): number {
            const count = this.cars.length;
            console.log(`There are ${count} cars stored in the garage.`);
            return count;
    }

        public findCarByModel(model: string): Car | undefined {
            return this.cars.find(
                (car) => car.getModel() === model);
        }
}