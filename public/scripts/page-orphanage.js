const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

let map = L.map('mapid', options).setView([-23.9618, -46.3322], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
  iconUrl: "/public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

L.marker([-23.9618, -46.3322], { icon }).addTo(map)


function selectImage(event) {
  const button = event.currentTarget
  const allButtons = document.querySelectorAll(".images button")
  allButtons.forEach(removeActiveClass) 

  function removeActiveClass(button) {
    button.classList.remove('active')
  }

  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  imageContainer.src = image.src

  button.classList.add('active')
}