
var mapC = L.map('mapC', { attributionControl: false, });
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    maxZoom: 25,

    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapC);

mapC.locate({ setView: true, maxZoom: 40 });
console.log("mapC done");

sleep(10000).then(() => {            
    window.location.replace("pages/homepage.html");
});
