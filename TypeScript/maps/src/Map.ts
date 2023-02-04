import { Markerable } from "./interfaces/Markerable";

export class Map {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(
            document.getElementById(divId) as HTMLElement,
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                }
            }
        );
    }

    addMarker(markerable: Markerable) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: markerable.location.lat,
                lng: markerable.location.lng
            }
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: markerable.getContent()
            });
            infoWindow.open(this.googleMap, marker);
        });

        return marker;
    }
}
