import 'firebase/auth';
import firebase from 'firebase';
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

const deleteSpecies = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/species/${firebaseKey}.json`)
    .then(() => getSpecies().then((speciesArray) => resolve(speciesArray)))
    .catch((error) => reject(error));
});

const getSpecificSpecies = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/species/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateSpecificSpecies = (firebaseKey, speciesObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/species/${firebaseKey}.json`, speciesObject)
    .then(() => getSpecies(firebase.auth().currentUser)).then((speciesArray) => resolve(speciesArray))
    .catch((error) => reject(error));
});

export {
  getSpecies, createSpecies, deleteSpecies, getSpecificSpecies, updateSpecificSpecies
};
