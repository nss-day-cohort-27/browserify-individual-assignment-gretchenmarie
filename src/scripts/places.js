let createPlace = require("./placeshtml.js");
let dataManager = require("./dataManager.js");

//1. get restaurants from ls
//2. iterate over them
//3. render them to the DOM
function listPlaces() {
    dataManager.fetchPlaces().then( (placesarray) => {
        placesarray.forEach(places => {
            let placesComponent = createPlace(places.name,places.location,places.description,places.id);
            writeInfoToDOM(placesComponent);
        })
    })
}
function writeInfoToDOM(place) {
    document.querySelector("#placesContainer").innerHTML += place;
}
module.exports = listPlaces