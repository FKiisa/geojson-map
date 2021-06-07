import {loadMap} from './mapContoller.js';
import {menuToggle} from './ui/menuContoller.js';

window.addEventListener('load', () => {
    init();
});

function init() {
    let leaflet = document.createElement("script");
    leaflet.id = "leafletScript";
    leaflet.type = "text/javascript";
    leaflet.src = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
    document.getElementsByTagName("body")[0].appendChild(leaflet);
    
    leaflet.onload = () => {
        console.log(`Leaflet version ${L.version} is ready to rock n roll`);
        loadMap();
    }
    document.getElementById('menuBtn').addEventListener('click', () => {
        menuToggle();
    })
}

