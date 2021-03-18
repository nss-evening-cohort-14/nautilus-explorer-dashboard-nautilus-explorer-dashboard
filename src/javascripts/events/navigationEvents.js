import getCrew from '../helpers/data/crewData';
import getSpecies from '../helpers/data/crudSpecies';
import showCrew from '../components/crew';
import { showReadSpecies, noReadSpecies } from '../components/species';

const navigationEvents = (user) => {
  document.querySelector('#readCrew').addEventListener('click', () => {
    getCrew(user).then((crewArray) => {
      if (crewArray.length) {
        showCrew(crewArray, user);
      }
    });
  });
  document.querySelector('#readSpecies').addEventListener('click', () => {
    getSpecies(user).then((speciesArray) => {
      if (speciesArray.length) {
        showReadSpecies(speciesArray, user);
      } else {
        noReadSpecies();
      }
    });
  });
};

export default navigationEvents;
