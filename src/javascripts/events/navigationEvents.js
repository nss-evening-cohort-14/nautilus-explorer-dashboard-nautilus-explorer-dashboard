<<<<<<< HEAD
=======
import dashboardView from '../components/pages/dashboardView';
import getCrew from '../helpers/data/crewData';
>>>>>>> development
import getSpecies from '../helpers/data/crudSpecies';
import { showCrew, emptyCrew } from '../components/pages/crew';
import { showReadSpecies, noReadSpecies } from '../components/pages/species';
import { emptyLogEntry, showLogEntry } from '../components/pages/logEntry';
import getLogEntry from '../helpers/data/logEntryData';
<<<<<<< HEAD
import { getCrew } from '../helpers/data/crewData';
=======
import getDestinations from '../helpers/data/destinationsData';
import destinationsView from '../components/pages/destinationsView';
>>>>>>> development

const navigationEvents = (user) => {
  $('#navbarLogo').on('click', () => {
    dashboardView();
  });

  document.querySelector('#readCrew').addEventListener('click', () => {
    getCrew(user).then((crewArray) => {
      if (crewArray.length) {
        showCrew(crewArray, user);
      } else {
        emptyCrew();
      }
    });
  });

  $('#readDestinations').on('click', () => {
    getDestinations().then((destinationsArray) => {
      destinationsView(destinationsArray);
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
