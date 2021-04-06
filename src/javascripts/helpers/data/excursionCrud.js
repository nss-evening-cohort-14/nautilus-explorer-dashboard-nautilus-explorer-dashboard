import 'firebase/auth';
import firebase from 'firebase';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getExcursions = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/excursions.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createExcursions = (excursionsObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/excursions.json`, excursionsObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/excursions/${response.data.name}.json`, body)
        .then(() => {
          getExcursions().then((excursionsArray) => resolve(excursionsArray));
        });
    }).catch((error) => reject(error));
});

const deleteExcursions = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/excursions/${firebaseKey}.json`)
    .then(() => getExcursions().then((speciesArray) => resolve(speciesArray)))
    .catch((error) => reject(error));
});

const getSpecificExcursions = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/excursions/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateSpecificExcursions = (firebaseKey, excursionsObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/excursions/${firebaseKey}.json`, excursionsObject)
    .then(() => getExcursions(firebase.auth().currentUser)).then((excursionsArray) => resolve(excursionsArray))
    .catch((error) => reject(error));
});

export {
  getExcursions, createExcursions, deleteExcursions, getSpecificExcursions, updateSpecificExcursions
};
