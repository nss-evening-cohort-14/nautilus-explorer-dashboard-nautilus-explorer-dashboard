import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
import { getCrew } from './crewData';
// import { getExcursions } from './excursionCrud';

const dbUrl = firebaseConfig.databaseURL;

const getExcursionCrew = (excursionID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/manageCrews.json?orderBy="excursionID"&equalTo="${excursionID}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const excursionsOnlyCrew = (excursionID) => new Promise((resolve, reject) => {
  Promise.all([getCrew(), getExcursionCrew(excursionID)])
    .then(([crewMembers, crewExcursionsJoin]) => {
      const crewArray = [];

      crewExcursionsJoin.forEach((excursion) => {
        crewMembers.forEach((crewMember) => {
          if (excursion.crewID === crewMember.firebaseKey) {
            crewArray.push(crewMember);
          }
        });
        return crewArray;
      });
      resolve(Object.values(crewArray));
    }).catch((error) => reject(error));
});

const createExcursionCrew = (excursionIDArg, crewIDArg) => new Promise((resolve, reject) => {
  const excursionObject = {
    excursionID: excursionIDArg,
    crewID: crewIDArg,
  };
  axios.post(`${dbUrl}/manageCrews.json`, excursionObject)
    .then((response) => {
      const body = { manageCrewID: response.data.name };
      axios.patch(`${dbUrl}/manageCrews/${response.data.name}.json`, body)
        .then(() => {});
    }).catch((error) => reject(error));
});

export { excursionsOnlyCrew, createExcursionCrew };
