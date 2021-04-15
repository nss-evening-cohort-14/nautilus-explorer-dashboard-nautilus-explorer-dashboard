import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
// import { getCrew } from './crewData';
// import { getExcursions } from './excursionCrud';

const dbUrl = firebaseConfig.databaseURL;

const getExcursionCrew = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/manageCrews.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
console.warn(getExcursionCrew);

// const excursionWithCrew = ([getCrew(), getExcursions(), getExcursionCrew()]) => new Promise((resolve, reject) => {
//   .then(([crew, excursions, crewExcursionsJoin,]) => {
//     const group

//   }).catch((error) => reject(error));
// });
