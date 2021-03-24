import { deleteDestination, getDestinationSpecies } from './destinationsData';
import { deleteSpecies } from './crudSpecies';

const deleteDestinationSpecies = (destinationId, uid) => new Promise((resolve, reject) => {
  getDestinationSpecies(destinationId).then((destinationSpeciesArray) => {
    const deleteAssociatedSpecies = destinationSpeciesArray.map((species) => deleteSpecies(species.firebaseKey));
    Promise.all(deleteAssociatedSpecies).then(() => resolve(deleteDestination(destinationId, uid)));
  }).catch((error) => reject(error));
});

export default deleteDestinationSpecies;
