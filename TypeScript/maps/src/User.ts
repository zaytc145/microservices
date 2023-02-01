import { faker } from "@faker-js/faker";

export class User {
    public name: string;
    public location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
}
