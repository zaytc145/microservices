import { faker } from "@faker-js/faker";
import { Markerable } from "./interfaces/Markerable";

export class Company implements Markerable {
    companyName: string;
    cathPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.name();
        this.cathPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    getContent(): string {
        return this.companyName;
    }
}
