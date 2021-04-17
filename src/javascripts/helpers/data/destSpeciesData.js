import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
import { getSpecies } from './crudSpecies';
// import { deleteDestination, getDestinationSpecies } from './destinationsData';
// import { deleteExcursions, getEx }
// import { deleteSpecies } from './crudSpecies';

/*
const deleteDestinationSpecies = (destinationId, uid) => new Promise((resolve, reject) => {
  getDestinationSpecies(destinationId).then((destinationSpeciesArray) => {
    const deleteAssociatedSpecies = destinationSpeciesArray.map((species) => deleteSpecies(species.firebaseKey));
    Promise.all(deleteAssociatedSpecies).then(() => resolve(deleteDestination(destinationId, uid)));
  }).catch((error) => reject(error));
});
*/

const dbUrl = firebaseConfig.databaseURL;

const getExcursionSpecies = (excursionID) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/manageSpecies.json?orderBy="excursionId"&equalTo="${excursionID}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const excursionsOnlySpecies = (excursionID) => new Promise((resolve, reject) => {
  Promise.all([getSpecies(), getExcursionSpecies(excursionID)])
    .then(([species, speciesExcursionsJoin]) => {
      const speciesArray = [];

      speciesExcursionsJoin.forEach((excursion) => {
        species.forEach((specie) => {
          if (excursion.speciesID === specie.firebaseKey) {
            speciesArray.push(specie);
          }
        });
        return speciesArray;
      });
      resolve(Object.values(speciesArray));
    }).catch((error) => reject(error));
});

const createExcursionSpecies = (excursionIDArg, speciesIDArg) => new Promise((resolve, reject) => {
  const excursionObject = {
    excursionID: excursionIDArg,
    speciesID: speciesIDArg,
  };
  axios.post(`${dbUrl}/manageSpecies.json`, excursionObject)
    .then((response) => {
      const body = { manageSpeciesID: response.data.name };
      axios.patch(`${dbUrl}/manageSpecies/${response.data.name}.json`, body)
        .then(() => { });
    }).catch((error) => reject(error));
});

export { excursionsOnlySpecies, createExcursionSpecies };
