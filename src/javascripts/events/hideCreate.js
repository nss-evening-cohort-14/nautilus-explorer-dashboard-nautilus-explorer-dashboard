import 'firebase/auth';
import { getLogEntry, seePublicLogs } from '../helpers/data/logEntryData';
import { showReadSpecies, noReadSpecies } from '../components/pages/species';
import { getSpecies } from '../helpers/data/crudSpecies';
import { showCrew, emptyCrew } from '../components/pages/crew';
import { getCrew } from '../helpers/data/crewData';
import { getDestinations } from '../helpers/data/destinationsData';
import destinationsView from '../components/pages/destinationsView';
import { showLogEntry, emptyLogEntry } from '../components/pages/logEntry';
import { noReadExcursions, showReadExcursions } from '../components/pages/excursions';
import { getExcursions } from '../helpers/data/excursionCrud';
import { getEnvironmental } from '../helpers/data/environmentalData';
import { emptyEnvironmental, showEnvironmental } from '../components/pages/environmental';

const dashboardEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // SHOW ENVIRONMENTAL VARIABLES
    if (e.target.id.includes('variablesView')) {
      getEnvironmental(user).then((environmentalArray) => {
        if (environmentalArray.length) {
          showEnvironmental(environmentalArray, user);
        } else {
          emptyEnvironmental(user);
        }
      });
    }
    // CLICK EVENT FOR READING CREW CARDS
    if (e.target.id.includes('crewView')) {
      getCrew(user).then((crewArray) => {
        if (crewArray.length) {
          showCrew(crewArray, user);
        } else {
          emptyCrew(user);
        }
      });
    }

    if (e.target.id.includes('destinationsView')) {
      getDestinations().then((destinationsArray) => {
        destinationsView(user, destinationsArray);
      });
    }

    if (e.target.id.includes('logsView')) {
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
    }

    if (e.target.id.includes('speciesView')) {
      getSpecies(user).then((speciesArray) => {
        if (speciesArray.length) {
          showReadSpecies(speciesArray, user);
        } else {
          noReadSpecies();
        }
      });
    }

    if (e.target.id.includes('excursionsView')) {
      getExcursions(user).then((excursionsArray) => {
        if (excursionsArray.length) {
          showReadExcursions(excursionsArray, user);
        } else {
          noReadExcursions();
        }
      });
    }
  });
};

export default dashboardEvents;
