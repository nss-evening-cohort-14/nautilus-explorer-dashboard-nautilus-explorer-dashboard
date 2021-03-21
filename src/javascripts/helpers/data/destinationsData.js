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

export { getDestinations, createDestination };
