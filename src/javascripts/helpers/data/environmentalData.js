import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

// API CALLS FOR ENVIRONMENTAL DATA
const dbUrl = firebaseConfig.databaseURL;
// GET ENVIRONMENTAL
const getEnvironmental = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/environmentalVariable.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE ENVIRONMENTAL DATA
const deleteEnvirontalVariable = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/environmentalVariable/${firebaseKey}.json`)
    .then(() => getEnvironmental(uid).then((variableArray) => resolve(variableArray)))
    .catch((error) => reject(error));
});

export { getEnvironmental, deleteEnvirontalVariable };
