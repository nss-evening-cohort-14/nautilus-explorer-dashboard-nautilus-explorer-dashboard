import 'firebase/auth';
import crewForm from '../components/forms/addCrew';
import editCrewForm from '../components/forms/editCrew';
import formModal from '../components/forms/formModal';
import { showCrew } from '../components/pages/crew';
import {
  createCrew, deleteCrew, getSingleCrew, updateCrew
} from '../helpers/data/crewData';

const domEvents = (user) => {
  document.querySelector('body').addEventListener('click', (e) => {
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
    // CLICK EVENT FOR SHOWING EDIT FORM
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
  });
};

export default domEvents;
