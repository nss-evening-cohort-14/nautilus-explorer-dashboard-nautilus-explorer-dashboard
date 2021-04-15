import firebase from 'firebase/app';
import 'firebase/auth';
import { getLogEntry } from '../../helpers/data/logEntryData';

const selectLogEntry = (excursionObject = {}) => {
  let domString = `<label for="selectLogEntryForExcursion">Select Log Entry</label>
    <select class="form-control" id="selectLogEntryForExcursion" required>
    <option value="">Select Log Entry</option>`;

  getLogEntry(firebase.auth().currentUser.uid).then((logEntryArray) => {
    logEntryArray.forEach((logEntry) => {
      if (logEntry.firebaseKey === excursionObject.firebaseKey) {
        domString += `<option selected value="${logEntry.firebaseKey}">${logEntry.title}</option>`;
      } else {
        domString += `<option value="${logEntry.firebaseKey}">${logEntry.title}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-logEntry').innerHTML = domString;
  });
};

export default selectLogEntry;
