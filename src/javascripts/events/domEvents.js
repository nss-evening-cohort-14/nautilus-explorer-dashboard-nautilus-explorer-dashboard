import firebase from 'firebase';
import 'firebase/auth';
import formModal from '../components/forms/formModal';
import crewForm from '../components/forms/addCrew';
import addLogForm from '../components/forms/addLogForm';
import addSpeciesForm from '../components/forms/addSpecies';
import { showReadSpecies, noReadSpecies } from '../components/pages/species';
import {
  getSpecies, createSpecies, deleteSpecies, getSpecificSpecies, updateSpecificSpecies
} from '../helpers/data/crudSpecies';
import { showCrew, emptyCrew } from '../components/pages/crew';
import { getCrew, createCrew, deleteCrew } from '../helpers/data/crewData';
import { getLogEntry, createNewLog, deleteLogEntry } from '../helpers/data/logEntryData';
import {
  getDestinations,
  getSingleDestination,
  createDestination,
  updateDestination,
} from '../helpers/data/destinationsData';
import destinationsView from '../components/pages/destinationsView';
import editSpeciesForm from '../components/forms/editSpecies';
import { showLogEntry, emptyLogEntry } from '../components/pages/logEntry';
import updateDestinationForm from '../components/forms/updateDestinationForm';
import deleteDestinationSpecies from '../helpers/data/destSpeciesData';

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

    if (e.target.id.includes('update-existing-species-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Species');
      getSpecificSpecies(firebaseKey).then((speciesObject) => editSpeciesForm(speciesObject));
    }

    if (e.target.id.includes('delete-species-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteSpecies(firebaseKey, user).then((speciesArray) => showReadSpecies(speciesArray, user));
    }

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

    if (e.target.id.includes('updateDestination')) {
      const firebaseKey = e.target.id.split('--')[1];

      getSingleDestination(firebaseKey).then((destinationObject) => {
        updateDestinationForm(destinationObject);
      });
    }

    if (e.target.id.includes('deleteDestination')) {
      const firebaseKey = e.target.id.split('--')[1];

      deleteDestinationSpecies(firebaseKey).then((destinationsArray) => {
        destinationsView(user, destinationsArray);
      });
    }

    if (e.target.id.includes('logsView')) {
      getLogEntry(user).then((logArray) => {
        if (logArray.length) {
          showLogEntry(logArray, user);
        } else {
          emptyLogEntry(user);
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
    // DELETE LOGS
    if (e.target.id.includes('delete-log')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?'));
      const firebaseKey = e.target.id.split('--')[1];
      deleteLogEntry(firebaseKey, user).then((logArray) => showLogEntry(logArray, user));
    }

    // CLICK EVENT FOR DELETING CREW CARD
    if (e.target.id.includes('delete-crew')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const crewId = e.target.id.split('--')[1];
        deleteCrew(crewId).then((crewArray) => showCrew(crewArray, user));
      }
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
        user,
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

    if (e.target.id.includes('updateDestinationForm')) {
      e.preventDefault();

      const firebaseKey = e.target.id.split('--')[1];

      const destinationObject = {
        name: $('#destinationName').val(),
        image: $('#destinationImage').val(),
      };

      updateDestination(firebaseKey, destinationObject).then(
        (destinationsArray) => {
          destinationsView(user, destinationsArray);
        },
      );
    }

    if (e.target.id.includes('submit-species')) {
      e.preventDefault();
      const speciesObject = {
        description: document.querySelector('#addSpeciesDescription').value,
        img: document.querySelector('#addSpeciesImage').value,
        name: document.querySelector('#addSpeciesName').value,
        destinationId: document.querySelector('#selectDestinationForSpecies').value,
        uid: firebase.auth().currentUser.uid,
      };
      createSpecies(speciesObject, user).then((speciesArray) => {
        showReadSpecies(speciesArray, user);
      });

      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('edit-species-form')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const speciesObject = {
        description: document.querySelector('#editSpeciesDescription').value,
        img: document.querySelector('#editSpeciesImage').value,
        name: document.querySelector('#editSpeciesName').value,
        destinationId: document.querySelector('#selectDestinationForSpecies').value,
        uid: firebase.auth().currentUser.uid,
      };
      updateSpecificSpecies(firebaseKey, speciesObject, user).then((speciesArray) => showReadSpecies(speciesArray, user));

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
