import firebase from 'firebase';
import 'firebase/auth';
import addLogForm from '../components/forms/addLogForm';
import { getLogEntry, createNewLog } from '../helpers/data/logEntryData';
// import formModal from '../components/forms/formModal';
import addSpeciesForm from '../components/forms/addSpecies';
import formModal from '../components/forms/formModal';
import { showReadSpecies, noReadSpecies } from '../components/pages/species';
import { getSpecies, createSpecies } from '../helpers/data/crudSpecies';
import getCrew from '../helpers/data/crewData';
import { showCrew, emptyCrew } from '../components/pages/crew';
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

    // CLICK TO SHOW ADD NEW LOG
    if (e.target.id.includes('addLogEntry')) {
      addLogForm();
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

    // CLICK TO SUBMIT NEW LOG
    if (e.target.id.includes('add-log')) {
      e.preventDefault();
      const logObject = {
        title: document.querySelector('#title').value,
        body: document.querySelector('#body').value,
        timestamp: new Date(),
        timezone: document.querySelector('#timezone').value,
        shared: document.querySelector('#log-private').checked,
        uid: firebase.auth().currentUser.uid,
      };
      createNewLog(logObject, user).then((logArray) => showLogEntry(logArray, user));
    }
  });
};

export default domEvents;
