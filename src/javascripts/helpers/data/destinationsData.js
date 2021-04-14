import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getDestinations = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/destination.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getSingleDestination = (firebaseKey) => new Promise((resolve, reject) => {
  // console.warn(`${dbUrl}/destination/${firebaseKey}.json`);
  axios
    .get(`${dbUrl}/destination/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createDestination = (newDestination) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/destination.json`, newDestination)
    .then((response) => {
      axios
        .patch(`${dbUrl}/destination/${response.data.name}.json`, {
          firebaseKey: response.data.name,
        })
        .then(() => {
          getDestinations().then((destinationsArray) => resolve(destinationsArray));
        });
    })
    .catch((error) => reject(error));
});

const deleteDestination = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/destination/${firebaseKey}.json`)
    .then(() => {
      getDestinations().then((destinationsArray) => resolve(destinationsArray));
    })
    .catch((error) => reject(error));
});

const updateDestination = (firebaseKey, destinationObject) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/destination/${firebaseKey}.json`, destinationObject)
    .then(() => getDestinations().then((response) => resolve(response)))
    .catch((error) => reject(error));
});

const getDestinationSpecies = (destinationId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/species.json?orderBy="destinationId"&equalTo="${destinationId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getDestinations, getSingleDestination, createDestination, deleteDestination, updateDestination, getDestinationSpecies
};
