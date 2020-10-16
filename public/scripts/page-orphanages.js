let map = L.map('mapid').setView([-23.9618, -46.3322], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeight: 240
}).setContent('Lar das Meninas <a href="/orphanage?id=1" class="choose-orphanage"><img src="/images/arrow-white.svg"></a>')

L.marker([-23.9618, -46.3322], { icon }).addTo(map)
    .bindPopup(popup)