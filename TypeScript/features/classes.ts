class Vehicle {
    protected honk(): void {
        console.log("beep");
    }
}

class Car extends Vehicle {
    private drive(): void {
        console.log("puk puk");
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle();
vehicle.honk();

const car = new Car();
car.startDrivingProcess();
