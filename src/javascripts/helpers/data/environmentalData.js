// import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

// API CALLS FOR ENVIRONMENTAL DATA
const dbUrl = firebaseConfig.databaseURL;
// GET ENVIRONMENTAL
const getEnvVars = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/environmentalVariable.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// BELOW IS ENVIRONMENTAL PLACEHOLDER DATA -- PLEASE UPDATE OR DELETE FOR YOUR FUNCTION!!

// // CREATE NEW ENVIRONMENTAL
// const createCrew = (crewObject) => new Promise((resolve, reject) => {
//   axios.post(`${dbUrl}/crew.json`, crewObject)
//     .then((response) => {
//       const body = { firebaseKey: response.data.name };
//       axios.patch(`${dbUrl}/crew/${response.data.name}.json`, body)
//         .then(() => {
//           getCrew().then((crewArray) => resolve(crewArray));
//         });
//     }).catch((error) => reject(error));
// });
// // DELETE ENVIRONMENTAL
// const deleteCrew = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.delete(`${dbUrl}/crew/${firebaseKey}.json`)
//     .then(() => getCrew().then((crewArray) => resolve(crewArray)))
//     .catch((error) => reject(error));
// });
// // GET SINGLE ENVIRONMENTAL FOR 'UPDATE ENVIRONMENTAL FORM'
// const getSingleCrew = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.get(`${dbUrl}/crew/${firebaseKey}.json`)
//     .then((response) => resolve(response.data))
//     .catch((error) => reject(error));
// });
// // UPDATE ENVIRONMENTAL
// const updateCrew = (firebaseKey, crewObject) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/crew/${firebaseKey}.json`, crewObject)
//     .then(() => getCrew()).then((crewArray) => resolve(crewArray))
//     .catch((error) => reject(error));
// });

export default getEnvVars;
