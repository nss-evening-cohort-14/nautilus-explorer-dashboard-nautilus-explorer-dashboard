import firebase from 'firebase/app';
import 'firebase/auth';
import { getEnvironmental } from '../../helpers/data/environmentalData';

const selectEnvironmental = (excursionObject = {}) => {
  let domString = `<label for="selectEvnironmentalForExcursion">Select Environment</label>
    <select class="form-control" id="selectEvnironmentalForExcursion" required>
    <option value="">Select Environmental</option>`;

  getEnvironmental(firebase.auth().currentUser.uid).then((environmentalVariableArray) => {
    environmentalVariableArray.forEach((environmentalVariable) => {
      if (environmentalVariable.destinationId === excursionObject.firebaseKey) {
        domString += `<option selected value="${environmentalVariable.firebaseKey}">${environmentalVariable.name}</option>`;
      } else {
        domString += `<option value="${environmentalVariable.firebaseKey}">${environmentalVariable.name}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-environmental').innerHTML = domString;
  });
};

export default selectEnvironmental;
