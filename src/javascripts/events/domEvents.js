import 'firebase/auth';
import getCrew from '../helpers/data/crewData';
import { showCrew, emptyCrew } from '../components/pages/crew';
import {
  getDestinations,
  createDestination,
} from '../helpers/data/destinationsData';
import destinationsView from '../components/pages/destinationsView';
import getLogEntry from '../helpers/data/logEntryData';
import { showLogEntry, emptyLogEntry } from '../components/pages/logEntry';
import getSpecies from '../helpers/data/crudSpecies';
import { showReadSpecies, noReadSpecies } from '../components/pages/species';

const domEvents = (user) => {
  $('body').on('click', (e) => {
    if (e.target.id.includes('crewView')) {
      getCrew(user).then((crewArray) => {
        if (crewArray.length) {
          showCrew(crewArray, user);
        } else {
          emptyCrew();
        }
      });
    }

    if (e.target.id.includes('destinationsView')) {
      getDestinations().then((destinationsArray) => {
        destinationsView(user, destinationsArray);
      });
    }

    if (e.target.id.includes('newDestinationButton')) {
      $('#newDestinationForm').on('submit', (e2) => {
        e2.preventDefault();

        const newDestination = {
          name: $('#destinationName').val(),
          image: $('#destinationImage').val(),
        };

        $('#destinationModal').modal('hide');

        createDestination(newDestination).then((destinationsArray) => {
          destinationsView(user, destinationsArray);
        });
      });
    }

    if (e.target.id.includes('logsView')) {
      getLogEntry(user).then((logArray) => {
        if (logArray.length) {
          showLogEntry(logArray, user);
        } else {
          emptyLogEntry();
        }
      });
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
  });
};

export default domEvents;
