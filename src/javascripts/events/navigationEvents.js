import getCrew from '../helpers/data/crewData';
import getSpecies from '../helpers/data/crudSpecies';
import showCrew from '../components/crew';
import { showReadSpecies, noReadSpecies } from '../components/species';
import { emptyLogEntry, showLogEntry } from '../components/logEntry';
import getLogEntry from '../helpers/data/logEntryData';

const navigationEvents = (user) => {
  document.querySelector('#readCrew').addEventListener('click', () => {
    getCrew(user).then((crewArray) => {
      if (crewArray.length) {
        showCrew(crewArray, user);
      }
    });
  });

  document.querySelector('#readLogEntries').addEventListener('click', () => {
    getLogEntry(user).then((logArray) => {
      if (logArray.length) {
        showLogEntry(logArray, user);
      } else {
        emptyLogEntry();
      }
    });
  });

  document.querySelector('#readSpecies').addEventListener('click', () => {
    getSpecies(user).then((speciesArray) => {
      if (speciesArray.length) {
        showReadSpecies(speciesArray, user);
      } else {
        noReadSpecies();
      }
    });
  });
};

export default navigationEvents;
