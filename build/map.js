import * as L from 'leaflet';
export class EnnovaMap {
    leafletMap;
    constructor() { }
    mapInit(id) {
        L.map(id);
    }
}
