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
const deleteCrew = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/crew/${firebaseKey}.json`)
    .then(() => getCrew().then((crewArray) => resolve(crewArray)))
    .catch((error) => reject(error));
});
// GET SINGLE CREW MEMBER FOR 'UPDATE CREW FORM'
const getSingleCrew = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/crew/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
// UPDATE CREW MEMBER
const updateCrew = (firebaseKey, crewObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/crew/${firebaseKey}.json`, crewObject)
    .then(() => getCrew()).then((crewArray) => resolve(crewArray))
    .catch((error) => reject(error));
});

export {
  getCrew, createCrew, deleteCrew, getSingleCrew, updateCrew
};
