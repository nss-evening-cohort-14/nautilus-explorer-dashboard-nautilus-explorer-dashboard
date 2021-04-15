import firebase from 'firebase/app';
import 'firebase/auth';
import { getSpecies } from '../../helpers/data/crudSpecies';

const selectSpecies = (excursionObject = {}) => {
  let domString = `<label for="selectSpeciesForExcursion">Select Species</label>
    <select class="form-control" id="selectSpeciesForExcursion" required>
    <option value="">Select Species</option>`;

  getSpecies(firebase.auth().currentUser.uid).then((speciesArray) => {
    speciesArray.forEach((species) => {
      if (species.firebaseKey === excursionObject.firebaseKey) {
        domString += `<option selected value="${species.firebaseKey}">${species.name}</option>`;
      } else {
        domString += `<option value="${species.firebaseKey}">${species.name}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-species').innerHTML = domString;
  });
};

export default selectSpecies;
