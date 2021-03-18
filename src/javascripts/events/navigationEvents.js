import showCrew from '../components/crew';
import { emptyLogEntry, showLogEntry } from '../components/logEntry';
import { getCrew } from '../helpers/data/crewData';
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
  // GO TO CREW MEMBERS PAGE
  document.querySelector('#readCrew').addEventListener('click', () => {
    getCrew(user).then((crewArray) => showCrew(crewArray));
  });
};

export default navigationEvents;
