import 'firebase/auth';
import addSpeciesForm from '../components/forms/addSpecies';
import formModal from '../components/forms/formModal';
import { showReadSpecies } from '../components/species';
import { createSpecies } from '../helpers/data/crudSpecies';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('addSpeciesBtn')) {
      formModal('Add Species');
      addSpeciesForm();
    }
    if (e.target.id.includes('submit-species')) {
      e.preventDefault();
      const speciesObject = {
        description: document.querySelector('#addSpeciesDescription').value,
        img: document.querySelector('#addSpeciesImage').value,
        name: document.querySelector('#addSpeciesName').value,
        destination_id: document.querySelector('#selectDestinationForSpecies').value,
      };
      createSpecies(speciesObject).then((speciesArray) => showReadSpecies((speciesArray)));

      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
