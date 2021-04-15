import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
import { getCrew } from './crewData';
import { getExcursions } from './excursionCrud';

const dbUrl = firebaseConfig.databaseURL;

const getExcursionCrew = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/manageCrews.json?orderBy="excursionID"`)
  // axios.get(`${dbUrl}/manageCrews.json?orderBy="excursionID"&equalTo="${excursionID}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const excursionsWithCrew = () => new Promise((resolve, reject) => {
  Promise.all([getCrew(), getExcursions(), getExcursionCrew()])
    .then(([crewMembers, excursions, crewExcursionsJoin]) => {
      console.warn(crewMembers, excursions, 'crewExcursion', crewExcursionsJoin);
      const allExcursionsInfoArray = excursions.map((excursion) => {
        console.warn(allExcursionsInfoArray);
        const excursionRelationshipsArray = crewExcursionsJoin.filter((crewExcursion) => crewExcursion.excursionID === excursion.id);
        console.warn('array', excursionRelationshipsArray);

        const crewInfoArray = excursionRelationshipsArray.map((excursionRelationship) => crewMembers.find((crew) => crew.id === excursionRelationship.crew_id));

        return { ...excursion, crewMembers: crewInfoArray };
      });
      resolve(allExcursionsInfoArray);
    }).catch((error) => reject(error));
});

// const excursionsWithCrew = () => new Promise((resolve, reject) => {
//   Promise.all([getCrew(), getExcursions(), getExcursionCrew()])
//     .then(([crewMembers, excursions, crewExcursionsJoin]) => {
//       console.warn('crew', crewMembers, 'crewExcursion', crewExcursionsJoin);

//       const allExcursionsInfoArray = [];

//       excursions.forEach((excursion) => {
//         const excursionRelationshipsArray = [];
//         excursionRelationshipsArray.push(crewExcursionsJoin.filter((crewExcursion) => crewExcursion.excursionID === excursion.id));
//         console.warn(excursionRelationshipsArray);
//       });

//       resolve(allExcursionsInfoArray);
//     }).catch((error) => reject(error));
// });

export default excursionsWithCrew;
