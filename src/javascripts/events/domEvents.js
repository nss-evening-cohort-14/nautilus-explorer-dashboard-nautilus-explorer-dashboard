import 'firebase/auth';
import addLogForm from '../components/forms/addLogForm';
import { showLogEntry } from '../components/logEntry';
import { createNewLog } from '../helpers/data/logEntryData';

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
        uid
      };
      createNewLog(logObject, uid).then((logArray) => showLogEntry(logArray));
    }
  });
};

export default domEvents;
