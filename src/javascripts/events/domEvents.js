import 'firebase/auth';
import crewForm from '../components/forms/addCrew';
import formModal from '../components/forms/formModal';
import { showCrew } from '../components/pages/crew';
import { createCrew } from '../helpers/data/crewData';

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
  });
};
// // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A BOOK
// if (e.target.id.includes('edit-book-btn')) {
//   const firebaseKey = e.target.id.split('--')[1];
//   formModal('Edit  Book');
//   // console.warn('CLICKED EDIT BOOK', e.target.id);
//   getSingleBook(firebaseKey).then((bookObject) => editBookForm(bookObject));
// }

export default domEvents;
