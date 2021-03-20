import firebase from 'firebase';
import 'firebase/auth';
import addLogForm from '../components/forms/addLogForm';
import { showLogEntry } from '../components/pages/logEntry';
import { createNewLog } from '../helpers/data/logEntryData';
// import formModal from '../components/forms/formModal';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
  // CLICK TO SHOW ADD NEW LOG
    if (e.target.id.includes('addLogEntry')) {
      addLogForm();
    }

    // CLICK TO SUBMIT NEW LOG
    if (e.target.id.includes('add-log')) {
      e.preventDefault();
      const logObject = {
        title: document.querySelector('#title').value,
        body: document.querySelector('#body').value,
        timestamp: new Date(),
        timezone: document.querySelector('#timezone').value,
        shared: document.querySelector('#log-private').checked,
        uid: firebase.auth().currentUser.uid,
      };
      createNewLog(logObject).then((logArray) => showLogEntry(logArray, uid));
    }
  });
};

export default domEvents;
