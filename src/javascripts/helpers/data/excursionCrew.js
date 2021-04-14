import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getExcursionCrew = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/manageCrews.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const excursionWithCrew = () => new Promise 
