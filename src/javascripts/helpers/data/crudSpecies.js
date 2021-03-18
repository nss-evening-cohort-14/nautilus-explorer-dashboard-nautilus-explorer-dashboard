import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getSpecies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/species.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export default getSpecies;
