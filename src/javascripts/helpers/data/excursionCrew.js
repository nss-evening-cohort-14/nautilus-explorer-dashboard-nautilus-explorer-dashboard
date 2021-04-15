import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
import { getCrew } from './crewData';
// import { getExcursions } from './excursionCrud';

const dbUrl = firebaseConfig.databaseURL;

const getExcursionCrew = (excursionID) => new Promise((resolve, reject) => {
  console.warn(`${dbUrl}/manageCrews.json?orderBy="excursionID"&equalTo="${excursionID}"`);
  debugger;
  axios.get(`${dbUrl}/manageCrews.json?orderBy="excursionID"&equalTo="${excursionID}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// const excursionsWithCrew = () => new Promise((resolve, reject) => {
//   Promise.all([getCrew(), getExcursions(), getExcursionCrew()])
//     .then(([crewMembers, excursions, crewExcursionsJoin]) => {
//       // console.warn(crewMembers, excursions, 'crewExcursion', crewExcursionsJoin);
//       const allExcursionsInfoArray = excursions.map((excursion) => {
//         // console.warn(allExcursionsInfoArray);
//         const excursionRelationshipsArray = crewExcursionsJoin.filter((crewExcursion) => crewExcursion.excursionID === excursion.id);
//         // console.warn('array', excursionRelationshipsArray);

//         const crewInfoArray = excursionRelationshipsArray.map((excursionRelationship) => crewMembers.find((crew) => crew.id === excursionRelationship.crew_id));

//         return { ...excursion, crewMembers: crewInfoArray };
//       });
//       resolve(allExcursionsInfoArray);
//       console.warn(allExcursionsInfoArray);
//     }).catch((error) => reject(error));
// });

const excursionsOnlyCrew = (excursionID) => new Promise((resolve, reject) => {
  Promise.all([getCrew(), getExcursionCrew(excursionID)])
    .then(([crewMembers, crewExcursionsJoin]) => {
      console.warn(crewMembers, 'my crew Excursion', crewExcursionsJoin);
      // const allExcursionsInfoArray = crewExcursionsJoin.map((excursion) => {
      //   console.warn(allExcursionsInfoArray);
      //   const excursionRelationshipsArray = crewExcursionsJoin.filter((crewExcursion) => crewExcursion.excursionID === excursion.id);
      //   console.warn('array', excursionRelationshipsArray);

      //   const crewInfoArray = excursionRelationshipsArray.map((excursionRelationship) => crewMembers.find((crew) => crew.id === excursionRelationship.crew_id));

      //   console.warn('crewInfoArray', crewInfoArray);
      //   debugger;
      //   return { ...excursion, crewMembers: crewInfoArray };
      // });

      // const allExcursionsInfoArray = crewExcursionsJoin.map((excursion) => {
      //   console.warn(allExcursionsInfoArray);
        // const excursionRelationshipsArray = crewExcursionsJoin.filter((crewExcursion) => crewExcursion.excursionID === excursion.id);
        // console.warn('array', excursionRelationshipsArray);

      const crewIDsArray = crewExcursionsJoin.map((crewExcursion) => crewExcursion.firebaseKey === excursionID));

        console.warn('crewInfoArray', crewInfoArray);
        debugger;
        return { ...excursion, crewMembers: crewInfoArray };
      });
      resolve(allExcursionsInfoArray);
      console.warn(allExcursionsInfoArray);
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
