// code is written specifically for OmitCentral another project from VisualX.nl
// For more info please visit visualx.nl and contact me.

window.onload = getLocation;

var x = document.getElementById("geoloc");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.setAttribute('value', position.coords.latitude + ", " + position.coords.longitude)
}