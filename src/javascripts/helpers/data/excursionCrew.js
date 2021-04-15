import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
import { getCrew } from './crewData';
import { getExcursions } from './excursionCrud';

const dbUrl = firebaseConfig.databaseURL;

const getExcursionCrew = (crewID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/manageCrews.json?orderBy="excursionID"&equalTo="${crewID}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const excursionsWithCrew = () => new Promise((resolve, reject) => {
  Promise.all([getCrew(), getExcursions(), getExcursionCrew()])
    .then(([crewMembers, excursions, crewExcursionsJoin]) => {
      console.warn('crew', crewMembers, 'excursion', excursions, 'crewExcursion', crewExcursionsJoin);
      const allExcursionsInfoArray = excursions.map((excursion) => {
        const excursionRelationshipsArray = crewExcursionsJoin.filter((crewExcursion) => crewExcursion.excursion_id === excursion.id);
        console.warn('array', excursionRelationshipsArray);

        const crewInfoArray = excursionRelationshipsArray.map((excursionRelationship) => crewMembers.find((crew) => crew.id === excursionRelationship.crew_id));

        return { ...excursion, crewMembers: crewInfoArray };
      });
      resolve(allExcursionsInfoArray);
    }).catch((error) => reject(error));
});

export default excursionsWithCrew;
