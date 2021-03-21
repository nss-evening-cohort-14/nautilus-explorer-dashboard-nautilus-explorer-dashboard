import dashboardView from '../components/pages/dashboardView';
import { getCrew } from '../helpers/data/crewData';
import getDestinations from '../helpers/data/destinationsData';
import getLogEntry from '../helpers/data/logEntryData';
import getEnvironmental from '../helpers/data/environmentalData';
import getSpecies from '../helpers/data/crudSpecies';
import { showCrew, emptyCrew } from '../components/pages/crew';
import destinationsView from '../components/pages/destinationsView';
import { emptyLogEntry, showLogEntry } from '../components/pages/logEntry';
import { emptyEnvironmental, showEnvironmental } from '../components/pages/environmental';
import { showReadSpecies, noReadSpecies } from '../components/pages/species';

const navigationEvents = (user) => {
  $('#navbarLogo').on('click', () => {
    dashboardView();
  });
  // GO TO CREW
  document.querySelector('#readCrew').addEventListener('click', () => {
    getCrew(user).then((crewArray) => {
      if (crewArray.length) {
        showCrew(crewArray, user);
      } else {
        emptyCrew(user);
      }
    });
  });
  // GO TO DESTINATIONS
  $('#readDestinations').on('click', () => {
    getDestinations().then((destinationsArray) => {
      destinationsView(destinationsArray);
    });
  });
  // GO TO LOGS
  document.querySelector('#readLogEntries').addEventListener('click', () => {
    getLogEntry(user).then((logArray) => {
      if (logArray.length) {
        showLogEntry(logArray, user);
      } else {
        emptyLogEntry();
      }
    });
  });
  // GO TO ENVIRONMENTAL VARIABLES
  $('#readEnvironmentalVariables').on('click', () => {
    getEnvironmental(user).then((environmentalArray) => {
      if (environmentalArray.length) {
        showEnvironmental(environmentalArray, user);
      } else {
        emptyEnvironmental(user);
      }
    });
  });
  // GO TO SPECIES
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
