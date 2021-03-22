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

// CREATE NEW LOG
const createNewLog = (logObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/logEntry.json`, logObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/logEntry/${response.data.name}.json`, body)
        .then(() => {
          getLogEntry(uid).then((logArray) => resolve(logArray));
        });
    }).catch((error) => reject(error));
});

export { getLogEntry, createNewLog, deleteLogEntry };
