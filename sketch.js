const mymap = L.map('mapid').setView([0,0], 1);

const attribution = '&copy; <a href = "https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);

const ISSicon = L.icon ({
  iconUrl: 'iss.png',
  iconSize: [70, 40],
  iconAnchor: [35, 20]
})

let marker = L.marker([0, 0], {icon: ISSicon}).addTo(mymap);

async function get_Location() {


}



 


