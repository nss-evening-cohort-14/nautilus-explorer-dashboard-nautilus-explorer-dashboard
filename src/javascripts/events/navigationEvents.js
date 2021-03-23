import dashboardView from '../components/pages/dashboardView';
import { getCrew } from '../helpers/data/crewData';
import { getSpecies } from '../helpers/data/crudSpecies';
import { showCrew, emptyCrew } from '../components/pages/crew';
import { showReadSpecies, noReadSpecies } from '../components/pages/species';
import { emptyLogEntry, showLogEntry } from '../components/pages/logEntry';
import { getLogEntry } from '../helpers/data/logEntryData';
import { getDestinations } from '../helpers/data/destinationsData';
import destinationsView from '../components/pages/destinationsView';

const navigationEvents = (user) => {
  $('#navbarLogo').on('click', () => {
    dashboardView();
  });

  document.querySelector('#readCrew').addEventListener('click', () => {
    getCrew(user).then((crewArray) => {
      if (crewArray.length) {
        showCrew(crewArray, user);
      } else {
        emptyCrew(user);
      }
    });
  });

  $('#readDestinations').on('click', () => {
    getDestinations().then((destinationsArray) => {
      destinationsView(user, destinationsArray);
    });
  });

  document.querySelector('#readLogEntries').addEventListener('click', () => {
    getLogEntry(user).then((logArray) => {
      if (logArray.length) {
        showLogEntry(logArray, user);
      } else {
        emptyLogEntry(user);
      }
    });
  });

  document.querySelector('#readSpecies').addEventListener('click', () => {
    getSpecies(user).then((speciesArray) => {
      if (speciesArray.length) {
        showReadSpecies(speciesArray, user);
      } else {
        noReadSpecies(user);
      }
    });
  });
};

export default navigationEvents;
