import dashboardView from '../components/pages/dashboardView';
import { getCrew } from '../helpers/data/crewData';
import { showCrew, emptyCrew } from '../components/pages/crew';
import destinationsView from '../components/pages/destinationsView';
import { getEnvironmental } from '../helpers/data/environmentalData';
import { getLogEntry, seePublicLogs } from '../helpers/data/logEntryData';
import { emptyLogEntry, showLogEntry } from '../components/pages/logEntry';
import { getSpecies } from '../helpers/data/crudSpecies';
import { showReadSpecies, noReadSpecies } from '../components/pages/species';
import { getDestinations } from '../helpers/data/destinationsData';
import { emptyEnvironmental, showEnvironmental } from '../components/pages/environmental';

const navigationEvents = (user) => {
  // GO TO HOME PAGE
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
      destinationsView(user, destinationsArray);
    });
  });
  // GO TO LOGS
  document.querySelector('#readLogEntries').addEventListener('click', () => {
    if (user) {
      getLogEntry(user).then((logArray) => {
        if (logArray.length) {
          showLogEntry(logArray, user);
        } else {
          emptyLogEntry();
        }
      });
    } else {
      seePublicLogs().then((logArray) => {
        if (logArray.length) {
          showLogEntry(logArray);
        }
      });
    }
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
        noReadSpecies(user);
      }
    });
  });
};

export default navigationEvents;
