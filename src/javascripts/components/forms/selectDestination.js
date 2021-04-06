import firebase from 'firebase/app';
import 'firebase/auth';
import { getDestinations } from '../../helpers/data/destinationsData';

const selectDestination = (speciesObject = {}) => {
  let domString = `<label for="selectDestinationForSpecies">Select Destination</label>
    <select class="form-control" id="selectDestinationForSpecies" required>
    <option value="">Select Destination</option>`;

  getDestinations(firebase.auth().currentUser.uid).then((destinationsArray) => {
    destinationsArray.forEach((destination) => {
      if (destination.firebaseKey === speciesObject.destinationId) {
        domString += `<option selected value="${destination.firebaseKey}">${destination.name}</option>`;
      } else {
        domString += `<option value="${destination.firebaseKey}">${destination.name}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-destination').innerHTML = domString;
  });
};

export default selectDestination;
