import firebase from 'firebase/app';
import 'firebase/auth';
import { getEnvironmental } from '../../helpers/data/environmentalData';

const selectEnvironmental = (destinationObject = {}) => {
  let domString = `<label for="selectEvnironmentalForExcursion">Select Destination</label>
    <select class="form-control" id="selectEvnironmentalForExcursion" required>
    <option value="">Select Environmental</option>`;

  getEnvironmental(firebase.auth().currentUser.uid).then((environmentalVariableArray) => {
    environmentalVariableArray.forEach((environmentalVariable) => {
      if (environmentalVariable.destinationId === destinationObject.firebaseKey) {
        domString += `<option selected value="${environmentalVariable.firebaseKey}">${environmentalVariable.destinationId}</option>`;
      } else {
        domString += `<option value="${environmentalVariable.firebaseKey}">${environmentalVariable.destinationId}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-environmental').innerHTML = domString;
  });
};

export default selectEnvironmental;
