import { emptyLogEntry, showLogEntry } from '../components/logEntry';
import getLogEntry from '../helpers/data/logEntryData';

const navigationEvents = (user) => {
  // Go to Log Entries Page
  document.querySelector('#readLogEntries').addEventListener('click', () => {
    getLogEntry(user).then((logArray) => {
      if (logArray.length) {
        showLogEntry(logArray, user);
      } else {
        emptyLogEntry();
      }
    });
  });
};

export default navigationEvents;
