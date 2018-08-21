function createPlacesEntry(name, location, description, id) {
    return ` <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="http://www.devilsislecoffee.bm/sites/devilsislecoffee.bm/files/images/header-images/restaurant-header-img.jpg"  alt="Card image cap">
    <div class="card-body">
    <h3 class = "card=text">${name}</h3>
    <p class = "card=text">${location}</p>
    <p class="card-text"> ${description}</p>
    </div>
    <button class="entry__delete" id="deleteEntryButton--${id}">Delete Restaurant</button>
    <br></br>
  </div>`;
}


module.exports = createPlacesEntry;