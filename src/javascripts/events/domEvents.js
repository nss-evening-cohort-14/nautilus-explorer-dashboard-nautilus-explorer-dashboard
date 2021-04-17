import firebase from 'firebase';
import 'firebase/auth';
import editLogForm from '../components/forms/editLogForm';
import {
  editLogEntry,
  getSingleLogEntry,
  getLogEntry,
  createNewLog,
  seePublicLogs,
  deleteLogEntry
} from '../helpers/data/logEntryData';
import crewForm from '../components/forms/addCrew';
import formModal from '../components/forms/formModal';
import editCrewForm from '../components/forms/editCrew';
import addLogForm from '../components/forms/addLogForm';
import addSpeciesForm from '../components/forms/addSpecies';
import addEnvironmentalVariableForm from '../components/forms/addEnvironmental';
import { showReadSpecies } from '../components/pages/species';
import {
  createSpecies,
  deleteSpecies,
  getSpecies,
  getSpecificSpecies,
  updateSpecificSpecies
} from '../helpers/data/crudSpecies';
import { showCrew, emptyCrew } from '../components/pages/crew';
import {
  getCrew,
  createCrew,
  deleteCrew,
  getSingleCrew,
  updateCrew
} from '../helpers/data/crewData';
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
// import { excursionsOnlySpecies } from '../helpers/data/destSpeciesData';
import { showReadExcursions } from '../components/pages/excursions';
import {
  createExcursions,
  deleteExcursions,
  updateSpecificExcursions,
  getSpecificExcursions
} from '../helpers/data/excursionCrud';
import editExcursionForm from '../components/forms/editExcursion';
import addExcursionForm from '../components/forms/addExcursion';
import {
  getSingleEnvironmentalVariable, deleteEnvirontalVariable,
  updateEnvironmentalVariable, createEnvironmentalVariable
} from '../helpers/data/environmentalData';
import { showEnvironmental } from '../components/pages/environmental';
import updateEnvironmentalVariableForm from '../components/forms/updateEnvironmentalVariableForm';
import formExcursionModal from '../components/forms/excursionModal';
import { deleteExcursionDestination } from '../helpers/data/excursionDestinations';
import { excursionsOnlyCrew } from '../helpers/data/excursionCrew';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING 'ADD CREW' FORM
    if (e.target.id.includes('addCrewButton')) {
      formModal('Add Crew');
      crewForm();
    }
    // CLICK EVENT FOR SHOWING 'EDIT CREW' FORM
    if (e.target.id.includes('update-crew')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Crew Member');
      getSingleCrew(firebaseKey).then((crewObject) => editCrewForm(crewObject));
    }
    // CLICK EVENT FOR DELETING CREW CARD
    if (e.target.id.includes('delete-crew')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const crewId = e.target.id.split('--')[1];
        deleteCrew(crewId).then((crewArray) => showCrew(crewArray, user));
      }
    }

    if (e.target.id.includes('addNewSpeciesBtn')) {
      formModal('Add Species');
      addSpeciesForm();
    }

    if (e.target.id.includes('addEnvironmentalButton')) {
      formModal('Add Environmental Variable');
      addEnvironmentalVariableForm();
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

    if (e.target.id.includes('addNewExcursionBtn')) {
      formModal('Add Excursion');
      addExcursionForm();
    }

    if (e.target.id.includes('update-existing-excursion-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Excursion');
      getSpecificExcursions(firebaseKey).then((excursionsObject) => editExcursionForm(excursionsObject));
    }

    if (e.target.id.includes('delete-excursion-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteExcursionDestination(firebaseKey);
      deleteExcursions(firebaseKey).then((excursionsArray) => showReadExcursions(excursionsArray, user));
    }

    if (e.target.id.includes('displayCrewMembers')) {
      const excursionID = e.target.id.split('--')[1];
      excursionsOnlyCrew(excursionID).then((crewMembers) => {
        formExcursionModal('Displaying Crew Members', crewMembers, 'crewMembers');
        $('#formExcursionModal').modal('toggle');
      });
    }

    if (e.target.id.includes('displayLogEntries')) {
      getLogEntry().then((logArray) => {
        formExcursionModal('Displaying Log Entries', logArray, 'logEntries');
        $('#formExcursionModal').modal('toggle');
      });
    }

    if (e.target.id.includes('displayEnviromentalData')) {
      formExcursionModal('Displaying Enviromental Data');
      $('#formExcursionModal').modal('toggle');
    }

    if (e.target.id.includes('displaySpecies')) {
      // const excursionID = e.target.id.split('--')[1];
      // excursionsOnlySpecies(excursionID).then((speciesArray) => {
      getSpecies().then((speciesArray) => {
        formExcursionModal('Displaying Species', speciesArray, 'species');
        $('#formExcursionModal').modal('toggle');
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
    // Destination Species
    if (e.target.id.includes('deleteDestination')) {
      // const firebaseKey = e.target.id.split('--')[1];

      // deleteDestinationSpecies(firebaseKey).then((destinationsArray) => {
      // destinationsView(user, destinationsArray);
      // });
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

    // CLICK TO SHOW ADD NEW LOG
    if (e.target.id.includes('addLogEntry')) {
      addLogForm();
    }
    // SHOW EDIT LOG MODAL
    if (e.target.id.includes('edit-log')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Log');
      getSingleLogEntry(firebaseKey).then((logObject) => editLogForm(logObject));
    }
    // DELETE LOGS
    if (e.target.id.includes('delete-log')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?'));
      const firebaseKey = e.target.id.split('--')[1];
      deleteLogEntry(firebaseKey, user).then((logArray) => showLogEntry(logArray, user));
    }

    // UPDATE ENVIRONMENTAL DATA
    if (e.target.id.includes('update-environmental')) {
      const firebaseKey = e.target.id.split('--')[1];

      getSingleEnvironmentalVariable(firebaseKey).then((environmentalVariableObject) => {
        updateEnvironmentalVariableForm(environmentalVariableObject);
      });
    }

    // DELETE ENVIRONMENTAL DATA
    if (e.target.id.includes('delete-environmental')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?'));
      const firebaseKey = e.target.id.split('--')[1];
      deleteEnvirontalVariable(firebaseKey, user).then((variableArray) => showEnvironmental(variableArray, user));
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
    // CLICK EVENT FOR SUBMITTING 'EDIT CREW FORM' TO UPDATE CREW MEMBER
    if (e.target.id.includes('edit-crew-form')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const crewObject = {
        firstname: document.querySelector('#firstName').value,
        lastname: document.querySelector('#lastName').value,
        job: document.querySelector('#title').value,
        months_tenure: document.querySelector('#tenure').value,
        image: document.querySelector('#image').value,
      };
      updateCrew(firebaseKey, crewObject).then((crewArray) => showCrew(crewArray, user));
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
        image: document.querySelector('#addSpeciesImage').value,
        name: document.querySelector('#addSpeciesName').value,
        // destinationId: document.querySelector('#selectDestinationForSpecies').value,
        // uid: firebase.auth().currentUser.uid,
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
        image: document.querySelector('#editSpeciesImage').value,
        name: document.querySelector('#editSpeciesName').value,
        // destinationId: document.querySelector('#selectDestinationForSpecies').value,
        uid: firebase.auth().currentUser.uid,
      };
      updateSpecificSpecies(firebaseKey, speciesObject, user).then((speciesArray) => showReadSpecies(speciesArray, user));

      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('submit-excursion-form')) {
      e.preventDefault();
      const destinationId = document.querySelector('#selectDestinationForSpecies').value;
      const crewId = document.querySelector('#selectCrewForExcursion').value;
      const speciesId = document.querySelector('#selectSpeciesForExcursion').value;
      const excursionObject = {
        description: document.querySelector('#addExcursionDescription').value,
        img: document.querySelector('#addExcursionImage').value,
        name: document.querySelector('#addExcursionName').value,
        // destinationId: document.querySelector('#selectDestinationForSpecies').value,
        uid: firebase.auth().currentUser.uid,
      };
      createExcursions(excursionObject, destinationId, crewId, speciesId).then((excursionsArray) => {
        showReadExcursions(excursionsArray, user);
      });

      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('edit-excursion-form')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const excursionObject = {
        description: document.querySelector('#editExcursionDescription').value,
        img: document.querySelector('#editExcursionImage').value,
        name: document.querySelector('#editExcursionName').value,
        // destinationId: document.querySelector('#selectDestinationForSpecies').value,
        uid: firebase.auth().currentUser.uid,
      };
      updateSpecificExcursions(firebaseKey, excursionObject, user).then((excursionsArray) => showReadExcursions(excursionsArray));

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
    // EDIT LOG ENTRY
    if (e.target.id.includes('edit-log-form')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const logObject = {
        title: document.querySelector('#title').value,
        body: document.querySelector('#body').value,
        timestamp: new Date(),
        timezone: document.querySelector('#timezone').value,
        shared: document.querySelector('#log-private').checked,
      };
      editLogEntry(firebaseKey, logObject, user).then((logArray) => showLogEntry(logArray, user));
      $('#formModal').modal('toggle');
    }

    if (e.target.id.includes('updateEnvironmentalVariableForm')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      const environmentalVariableObject = {
        current: $('#environmentalVariableCurrent').val(),
        depth: $('#environmentalVariableDepth').val(),
        latitude: $('#environmentalVariableLatitude').val(),
        longitude: $('#environmentalVariableLongitude').val(),
        pressure: $('#environmentalVariablePressure').val(),
        temperature: $('#environmentalVariableTemperature').val(),
      };

      updateEnvironmentalVariable(
        firebaseKey,
        environmentalVariableObject,
      ).then((environmentalVariableArray) => {
        showEnvironmental(environmentalVariableArray);
      });
    }

    if (e.target.id.includes('submit-environmental-form')) {
      e.preventDefault();
      const variableObject = {
        name: document.querySelector('#addEnvName').value,
        depth: document.querySelector('#addEnvDepth').value,
        current: document.querySelector('#addEnvCurrent').value,
        latitude: document.querySelector('#addEnvLatitude').value,
        longitude: document.querySelector('#addEnvLongitude').value,
        pressure: document.querySelector('#addEnvPressure').value,
        temperature: document.querySelector('#addEnvTemperature').value,
        destinationId: document.querySelector('#selectDestinationForSpecies').value,
        timestamp: new Date(),
        uid: firebase.auth().currentUser.uid,
      };
      createEnvironmentalVariable(variableObject, user).then((variableArray) => {
        showEnvironmental(variableArray, user);
      });

      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
