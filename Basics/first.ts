class Car {
    drive() {
        console.log('Driving a Car');
    }

    pickPassengers(count: number) {
        console.log('Can pickup: ' + count + ' passengers.');
    }
};

class Truck {
    drive() {
        console.log('Driving a Truck');
    }

    pickCargo(quantity: number) {
        console.log('Can load: ' + quantity + ' kg cargo.');
    }
};

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const v = {} as Vehicle;


