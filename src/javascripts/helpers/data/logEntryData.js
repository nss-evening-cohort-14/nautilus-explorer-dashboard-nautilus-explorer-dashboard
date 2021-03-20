import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL LOG ENTRIES
const getLogEntry = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/logEntry.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// DELETE LOGS
const deleteLogEntry = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/logEntry/${firebaseKey}.json`)
    .then(() => getLogEntry(uid).then((logArray) => resolve(logArray)))
    .catch((error) => reject(error));
});

// DELETE ENVIRONMENTAL Variable
// const deleteEnvirontalVariable = (firebaseKey, uid) => new Promise((resolve, reject) => {
//   axios.delete(`${dbUrl}/environmentalVariable.json`)
//   .then(() => //getEV data(uid).then((EVarray) => resolve(EVarray)))
// }).catch((error) => reject(error));

export { getLogEntry, deleteLogEntry };
