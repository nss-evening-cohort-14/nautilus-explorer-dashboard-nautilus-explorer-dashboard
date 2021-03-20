import 'firebase/auth';
import firebase from 'firebase';
import addSpeciesForm from '../components/forms/addSpecies';
import formModal from '../components/forms/formModal';
import { showReadSpecies, noReadSpecies } from '../components/pages/species';
import { getSpecies, createSpecies } from '../helpers/data/crudSpecies';
import getCrew from '../helpers/data/crewData';
import { showCrew, emptyCrew } from '../components/pages/crew';
import getLogEntry from '../helpers/data/logEntryData';
import { showLogEntry, emptyLogEntry } from '../components/pages/logEntry';
import getDestinations from '../helpers/data/destinationsData';
import destinationsView from '../components/pages/destinationsView';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('addNewSpeciesBtn')) {
      formModal('Add Species');
      addSpeciesForm();
    }

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
        destinationsView(destinationsArray);
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

  document.querySelector('body').addEventListener('submit', (e) => {
    if (e.target.id.includes('submit-species')) {
      e.preventDefault();
      const speciesObject = {
        description: document.querySelector('#addSpeciesDescription').value,
        img: document.querySelector('#addSpeciesImage').value,
        name: document.querySelector('#addSpeciesName').value,
        // destination_id: document.querySelector('#selectDestinationForSpecies').value,
        uid: firebase.auth().currentUser.uid,
      };
      createSpecies(speciesObject, user).then((speciesArray) => showReadSpecies((speciesArray)));

      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
