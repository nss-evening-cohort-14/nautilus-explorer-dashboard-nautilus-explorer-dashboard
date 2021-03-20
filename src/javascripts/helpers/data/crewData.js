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

export default getCrew;
