import firebase from 'firebase/app';
import 'firebase/auth';
import { getCrew } from '../../helpers/data/crewData';

const selectCrew = (excursionObject = {}) => {
  let domString = `<label for="selectCrewForExcursion">Select Crew Member</label>
    <select class="form-control" id="selectCrewForExcursion" required>
    <option value="">Select Crew Member</option>`;

  getCrew(firebase.auth().currentUser.uid).then((crewArray) => {
    crewArray.forEach((crew) => {
      if (crew.firebaseKey === excursionObject.firebaseKey) {
        domString += `<option selected value="${crew.firebaseKey}">${crew.firstname} ${crew.lastname}</option>`;
      } else {
        domString += `<option value="${crew.firebaseKey}">${crew.firstname} ${crew.lastname}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-crew').innerHTML = domString;
  });
};

export default selectCrew;
