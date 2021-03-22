import firebase from 'firebase';
import 'firebase/auth';
import crewForm from '../components/forms/addCrew';
import formModal from '../components/forms/formModal';
import { getCrew, createCrew } from '../helpers/data/crewData';
import addLogForm from '../components/forms/addLogForm';
import { getLogEntry, createNewLog, seePublicLogs } from '../helpers/data/logEntryData';
import addSpeciesForm from '../components/forms/addSpecies';
import { showReadSpecies, noReadSpecies } from '../components/pages/species';
import { getSpecies, createSpecies } from '../helpers/data/crudSpecies';
import { showCrew, emptyCrew } from '../components/pages/crew';
import {
  getDestinations,
  createDestination,
} from '../helpers/data/destinationsData';
import destinationsView from '../components/pages/destinationsView';
import { showLogEntry, emptyLogEntry } from '../components/pages/logEntry';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING 'ADD CREW' FORM
    if (e.target.id.includes('addCrewButton')) {
      formModal('Add Crew');
      crewForm();
    }

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

    // CLICK TO SHOW ADD NEW LOG
    if (e.target.id.includes('addLogEntry')) {
      addLogForm();
    }
  });

  document.querySelector('body').addEventListener('submit', (e) => {
    // CLICK EVENT FOR SUBMITTING 'ADD CREW' FORM
    if (e.target.id.includes('submit-crew')) {
      e.preventDefault();
      const crewObject = {
        firstname: document.querySelector('#firstName').value,
        lastname: document.querySelector('#lastName').value,
        job: document.querySelector('#title').value,
        months_tenure: document.querySelector('#tenure').value,
        image: document.querySelector('#image').value,
        user
      };
      createCrew(crewObject).then((crewArray) => showCrew(crewArray, user));
      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('newDestinationForm')) {
      e.preventDefault();

      const newDestination = {
        name: $('#destinationName').val(),
        image: $('#destinationImage').val(),
      };

      $('#destinationModal').modal('hide');

      createDestination(newDestination).then((destinationsArray) => {
        destinationsView(user, destinationsArray);
      });
    }

    if (e.target.id.includes('submit-species')) {
      e.preventDefault();
      const speciesObject = {
        description: document.querySelector('#addSpeciesDescription').value,
        img: document.querySelector('#addSpeciesImage').value,
        name: document.querySelector('#addSpeciesName').value,
        // destination_id: document.querySelector('#selectDestinationForSpecies').value,
        uid: firebase.auth().currentUser.uid,
      };
      createSpecies(speciesObject, user).then((speciesArray) => {
        showReadSpecies(speciesArray);
      });

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
      createNewLog(logObject, user).then((logArray) => {
        showLogEntry(logArray, user);
      });
    }
  });
};

export default domEvents;
