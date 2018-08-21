let FormManager = require("./placesForm.js")
let dataManager = require("./DataManager.js")
let listPlaces = require("./places.js")
let createPlace = require("./placeshtml.js");

// Render the journal entry form
document.querySelector("#placesList").innerHTML = FormManager.renderEntryForm()

// Add an event listener for the save button
document.querySelector("#saveEntryButton").addEventListener("click", () => {
    // Get form field values
    // Create object from them
    const newPlace = {
        name: document.querySelector("#placeName").value,
        location: document.querySelector("#placeLocation").value,
        description:document.querySelector("#placeDescription").value
    }
    console.log(newPlace);
    // POST to API
    dataManager.savePlaces(newPlace).then(() => {
        // Clear the form fields
        FormManager.clearForm()

        // Put HTML representation on the DOM
    })

})
//const getAllEntries = fetch("")
document.querySelector("#placesContainer").addEventListener("click", (event) => {
    const placeId = event.target.id.split("--")[1]
    dataManager.deletePlaces(placeId).then(() => {
        document.querySelector("#placesContainer").innerHTML = ""
        listPlaces()
    })

})
listPlaces()