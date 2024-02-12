import "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
console.log(L)
const mymap = L.map('map').setView([49.69829, 21.74613], 17);
const marker = L.marker([49.69829, 21.74613]).addTo(mymap);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmV2ZXJzbyIsImEiOiJja2VpYjhmaWIwajFsMnptdThsYjd1OTgxIn0.LRaJdAkjyH7gH9MMUqgtfA', {
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
marker.bindPopup("<b>Gazetka firmowa</b><br>Krosno, Tysiąclecia 14/20").openPopup();