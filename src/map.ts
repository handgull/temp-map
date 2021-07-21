import * as L from 'leaflet';

export class EnnovaMap {
    private leafletMap: any;
    constructor() { }

    mapInit(id: string) {
        L.map(id);
    }
}
