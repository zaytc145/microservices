export interface Markerable {
    location: {
        lat: number;
        lng: number;
    };
    getContent(): string;
}
