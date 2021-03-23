import speciesName from '../../../assets/speciesName.png';
import speciesDescription from '../../../assets/speciesDescription.png';
import speciesDestination from '../../../assets/speciesDestination.png';

const showReadSpecies = (speciesArray, user) => {
  if (user) {
    document.querySelector('#addButton').innerHTML = '<button class="btn btn-sm mb-4" data-toggle="modal" data-target="#formModal" id="addNewSpeciesBtn">Add Species</button>';
  }
  document.querySelector('#formContainer').innerHTML = '';
  document.querySelector('#cardContainer').innerHTML = '<div id="speciesContainer"></div>';

  speciesArray.forEach((creature) => {
    document.querySelector('#speciesContainer').innerHTML += `
    <div class="card mb-3" style="max-width: 540px;" id="speciesCard">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${creature.img}" class="card-img" alt=${creature.name}>
        </div>
        <div class="col-md-8">
          <div class="card-body">
           <h6 class="card-title" id="speciesName"><img src="${speciesName}">  : ${creature.name}</h6> 
           <p class="card-text" id="speciesDescription"><img src="${speciesDescription}">  : ${creature.description}</p>
            <p class="card-text" id="speciesDestination"><img src="${speciesDestination}">  : ${creature.destination_id}</p>
            ${user ? `<button class="btn btn-sm border-dark view-species-btn" data-toggle="modal" data-target="#formModal" id="update-existing-species-btn--${creature.firebaseKey}">Update Species</button>
            <button class="btn btn-sm border-dark delete-species-btn" id="delete-species-btn--${creature.firebaseKey}">Delete Species</button>` : ''}
          </div>
        </div>
      </div>
    </div>`;
  });
};

const noReadSpecies = (user) => {
  if (user) {
    document.querySelector('#addButton').innerHTML = '<button class="btn btn-sm mb-4" id="addNewSpeciesBtn">Add Species</button>';
  }
  document.querySelector('#cardContainer').innerHTML = '<h1>I seek the white whale.</h1>';
};

export { showReadSpecies, noReadSpecies };
