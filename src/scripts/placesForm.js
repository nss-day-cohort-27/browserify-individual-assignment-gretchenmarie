const FormManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#placeName").value = ""
            document.querySelector("#placeLocation").value = ""
            document.querySelector("#placeDescription").value = ""
        }
    },

    renderEntryForm: {
        value: () => {
            return `
            <fieldset class="placeform">
            <label for="placeName">Restaurant Name:</label>
            <input required type="text" id="placeName">
        </fieldset>
        <fieldset class="placespace">
            <label for="placeLocation">Location:</label>
            <input required type="text" id="placeLocation">
        </fieldset>
        <fieldset class="placefield">
            <label for="placeDescription">Description:</label>
            <textarea id="placeDescription"></textarea>
        </fieldset>
        <button id="saveEntryButton">Save Restaurant</button>

        </fieldset>
        <br></br>
        <p></p>
    `
     }
    }

})


module.exports = FormManager


