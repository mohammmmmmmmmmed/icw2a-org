var mapR = L.map('mapR', { attributionControl: false, scrollWheelZoom: false });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    maxZoom: 25,

    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapR);

mapR.locate({ setView: true, maxZoom: 20 });
console.log("mapR done");
