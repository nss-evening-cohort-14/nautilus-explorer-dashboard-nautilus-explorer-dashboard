// import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

// API CALLS FOR CREW
const dbUrl = firebaseConfig.databaseURL;

// GET CREW
const getCrew = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/crew.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// CREATE NEW CREW MEMBER
const createCrew = (crewObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/crew.json`, crewObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/crew/${response.data.name}.json`, body)
        .then(() => {
          getCrew().then((crewArray) => resolve(crewArray));
        });
    }).catch((error) => reject(error));
});
  // DELETE CREW MEMBER
  // UPDATE CREW MEMBER
export { getCrew, createCrew };
