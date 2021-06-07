import {getData} from './data.js';

export function loadMap() {
    let map = L.map('mapId').setView([37.636340, -77.620650], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicGF5c3MiLCJhIjoiY2szdTN6cjJ4MDh5NTNlbXNsbXpyNzA1ZCJ9.ABFu-daJfI3OOvWjWHBMdA'
    }).addTo(map);

    L.marker([37.636340, -77.620650]).addTo(map).bindPopup("Richmond, VA 23233 USA. 37.636340, -77.620650");
    L.geoJSON(getData()).addTo(map);
}