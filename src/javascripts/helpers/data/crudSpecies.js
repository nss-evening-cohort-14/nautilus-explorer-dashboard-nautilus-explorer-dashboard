import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getSpecies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/species.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createSpecies = (speciesObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/species.json`, speciesObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/species/${response.data.name}.json`, body)
        .then(() => {
          getSpecies().then((speciesArray) => resolve(speciesArray));
        });
    }).catch((error) => reject(error));
});

export { getSpecies, createSpecies };
