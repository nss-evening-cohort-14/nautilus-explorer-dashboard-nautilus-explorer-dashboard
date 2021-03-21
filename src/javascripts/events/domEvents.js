import 'firebase/auth';
import formModal from '../components/forms/formModal';
import crewForm from '../components/forms/addCrew';
import editCrewForm from '../components/forms/editCrew';
import {
  getCrew, createCrew, deleteCrew, getSingleCrew, updateCrew
} from '../helpers/data/crewData';
import { showCrew, emptyCrew } from '../components/pages/crew';
import getLogEntry from '../helpers/data/logEntryData';
import { showLogEntry, emptyLogEntry } from '../components/pages/logEntry';
import getSpecies from '../helpers/data/crudSpecies';
import { showReadSpecies, noReadSpecies } from '../components/pages/species';
import getDestinations from '../helpers/data/destinationsData';
import destinationsView from '../components/pages/destinationsView';
import getEnvinromental from '../helpers/data/environmentalData';
import { emptyEnvironmental, showEnvironmental } from '../components/pages/environmental';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // ---------------
    // ---------------
    // CREW EVENTS
    // CLICK EVENT FOR SHOWING 'ADD CREW' FORM
    if (e.target.id.includes('addCrewButton')) {
      formModal('Add Crew');
      crewForm();
    }
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
    // CLICK EVENT FOR DELETING CREW CARD
    if (e.target.id.includes('delete-crew')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const crewId = e.target.id.split('--')[1];
        deleteCrew(crewId).then((crewArray) => showCrew(crewArray, user));
      }
    }
    // CLICK EVENT FOR SHOWING 'EDIT CREW FORM'
    if (e.target.id.includes('update-crew')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Crew Member');
      getSingleCrew(firebaseKey).then((crewObject) => editCrewForm(crewObject));
    }
    // CLICK EVENT FOR SUBMITTING 'EDIT CREW FORM' TO UPDATE CREW MEMBER
    if (e.target.id.includes('submit-edit-crew')) {
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
    // ---------------
    // ---------------
    // HOMEPAGE EVENTS
    // GO TO CREW
    if (e.target.id.includes('crewView')) {
      getCrew(user).then((crewArray) => {
        if (crewArray.length) {
          showCrew(crewArray, user);
        } else {
          emptyCrew(user);
        }
      });
    }
    // GO TO DESTINATIONS
    if (e.target.id.includes('destinationsView')) {
      getDestinations().then((destinationsArray) => {
        destinationsView(destinationsArray);
      });
    }
    // GO TO LOGS
    if (e.target.id.includes('logsView')) {
      getLogEntry(user).then((logArray) => {
        if (logArray.length) {
          showLogEntry(logArray, user);
        } else {
          emptyLogEntry();
        }
      });
    }
    // GO TO ENVIRONMENTAL VARIABLES
    if (e.target.id.includes('')) {
      getEnvinromental(user).then((environmentalArray) => {
        if (environmentalArray.length) {
          showEnvironmental(environmentalArray, user);
        } else {
          emptyEnvironmental(user);
        }
      });
    }
    // GO TO SPECIES
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
