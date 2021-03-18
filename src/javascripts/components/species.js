// import speciesName from '../../assets/speciesName.png';
// import speciesDescription from '../../assets/speciesDescription.png';
// import speciesDestination from '../../assets/speciesDestination.png';

const showReadSpecies = (speciesArray, user) => {
  document.querySelector('#addButton').innerHTML = '<button class="btn btn-sm mb-4" id="addSpeciesBtn">Add Species</button>';
  document.querySelector('#formContainer').innerHTML = '';
  document.querySelector('#mainContainer').innerHTML = '';

  speciesArray.forEach((creature) => {
    document.querySelector('#cardContainer').innerHTML += `
    <div class="card mb-3" style="max-width: 540px;" id="speciesCard">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="" class="card-img" alt=${creature.name}>
          <h6 class="card-title" id="speciesName"><img src="">  : ${creature.name}</h6>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p class="card-text" id="speciesDescription"><img src="">  : ${creature.description}</p>
            <p class="card-text" id="speciesDestination"><img src="">  : ${creature.destination_id}</p>
            ${user ? `<button class="btn btn-sm border-dark view-species-btn" data-toggle="modal" data-target="#formModal" id="update-species-btn--${creature.firebasKey}">Update Species</button>
            <button class="btn btn-sm border-dark delete-species-btn" id="delete-species--${creature.firebasKey}">Delete Species</button>` : ''}
          </div>
        </div>
      </div>
    </div>`;
  });
};

const noReadSpecies = () => {
  document.querySelector('#cardContainer').innerHTML = '<h1>I seek the white whale.</h1>';
};

export { showReadSpecies, noReadSpecies };
