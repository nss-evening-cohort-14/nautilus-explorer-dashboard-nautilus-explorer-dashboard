// import { deleteDestination, getDestinationSpecies } from './destinationsData';
import { deleteExcursions, getEx }
import { deleteSpecies } from './crudSpecies';

// const deleteDestinationSpecies = (destinationId, uid) => new Promise((resolve, reject) => {
//   getDestinationSpecies(destinationId).then((destinationSpeciesArray) => {
//     const deleteAssociatedSpecies = destinationSpeciesArray.map((species) => deleteSpecies(species.firebaseKey));
//     Promise.all(deleteAssociatedSpecies).then(() => resolve(deleteDestination(destinationId, uid)));
//   }).catch((error) => reject(error));
// });

const dbUrl = firebaseConfig.databaseURL;

const getExcursionSpecies = (excursionID) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/manageSpecies/.json?orderBy="excursionId"&equalTo="${excursionID}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// export default deleteDestinationSpecies;
