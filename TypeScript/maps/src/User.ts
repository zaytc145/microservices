import { faker } from "@faker-js/faker";
import { Markerable } from "./interfaces/Markerable";

export class User implements Markerable {
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

    getContent(): string {
        return this.name;
    }
}
