import firebase from 'firebase';
import 'firebase/auth';
import speciesName from '../../../assets/speciesName.png';
import speciesDescription from '../../../assets/speciesDescription.png';
import speciesDestination from '../../../assets/speciesDestination.png';
import { getSingleDestination } from '../../helpers/data/destinationsData';
import crewOptionTwoImg from '../../../assets/crewOptionTwo.png';
import destinationImg from '../../../assets/destination.png';
import krakenIconImg from '../../../assets/krakenIcon.png';
import environmentalVariablesImg from '../../../assets/environmentalVariables.png';

const showReadExcursions = (speciesArray) => {
  const user = firebase.auth().currentUser;
  if (user) {
    document.querySelector('#addButton').innerHTML = '<button class="btn btn-sm mb-4" data-toggle="modal" data-target="#formModal" id="addNewExcursionBtn">Add Excursion</button>';
  }
  document.querySelector('#formContainer').innerHTML = '';
  document.querySelector('#cardContainer').innerHTML = '<div id="excursionsContainer"></div>';
  document.querySelector('#excursionsContainer').innerHTML = '';

  speciesArray.forEach((excursion) => {
    getSingleDestination(excursion.destinationId).then((destination) => {
      document.querySelector('#excursionsContainer').innerHTML += `
    <div class="card mb-3" style="max-width: 540px;" id="excursionCard">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${excursion.img}" class="card-img" alt=${excursion.name}>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h6 class="card-title" id="excursionName"><img src="${speciesName}">  : ${excursion.name}</h6>
            <p class="card-text" id="excursionDescription"><img src="${speciesDescription}">  : ${excursion.description}</p>
            <p class="card-text" id="excursionDestination"><img src="${speciesDestination}">  : ${destination.name}</p>
            <div class="card mb-3">
               <button class="btn btn-sm border-dark display-excursion-btn">
                 <p class="card-text" id="displayCrewMembers--${excursion.destinationId}"><img src="${crewOptionTwoImg}"> Crew Members
               </button>
               <button class="btn btn-sm border-dark display-excursion-btn"><p class="card-text" id="displayDestination--${excursion.destinationId}"><img src="${destinationImg}"> Destination</p></button>
               <button class="btn btn-sm border-dark display-excursion-btn"><p class="card-text" id="displayEnviromentalData--${excursion.destinationId}"><img src="${environmentalVariablesImg}"> Enviromental Data</button>
               <button class="btn btn-sm border-dark display-excursion-btn"><p class="card-text" id="displaySpecies--${excursion.destinationId}"><img src="${krakenIconImg}"> Species</button>
            </div>
            ${user ? `<button class="btn btn-sm border-dark view-excursion-btn" data-toggle="modal" data-target="#formModal" id="update-existing-excursion-btn--${excursion.firebaseKey}  ">Update Excursion</button>
            <button class="btn btn-sm border-dark delete-excursion-btn" id="delete-excursion-btn--${excursion.firebaseKey}">Delete Excursion</button>` : ''}
          </div>
        </div>
      </div>
    </div>`;
    });
  });
};

const noReadExcursions = (user) => {
  if (user) {
    document.querySelector('#addButton').innerHTML = '<button class="btn btn-sm mb-4" data-toggle="modal" data-target="#formModal" id="addNewExcursionBtn">Add Excursion</button>';
  }
  document.querySelector('#cardContainer').innerHTML = '<h1>Dive Deep</h1>';
};

export { showReadExcursions, noReadExcursions };
