var navMain = document.querySelector(".user-nav");
var navToggle = document.querySelector(".user-nav__toogle");


navMain.classList.remove("user-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("user-nav--closed")) {
    navMain.classList.remove("user-nav--closed");
    navMain.classList.add("user-nav--opened");
  } else {
    navMain.classList.add("user-nav--closed");
    navMain.classList.remove("user-nav--opened");
  }
});


var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 59.9392266,
      lng: 30.32287000
    },
    zoom: 16
  });
  var marker = new google.maps.Marker({
    position: {
      lat: 59.9385365,
      lng: 30.32291472
    },
    map: map,
    title: "Наш маркер",
    icon: "../img/icon-map-pin.svg"
  });
}
