const dataManager = Object.create(null, {

    savePlaces: {
        value: (place) => {
            return fetch("http://localhost:8088/places", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(place)
            })
                .then(response => response.json())
        }
    },

    fetchPlaces: {
        value: () => {
            return fetch("http://localhost:8088/places")
                .then(res => res.json())

        }
    },
    deletePlaces: {
        value: (id) => {
            return fetch(`http://localhost:8088/places/${id}`, {
                method: "DELETE",

            })
                .then(response => response.json())
        }
    },

})

module.exports = dataManager