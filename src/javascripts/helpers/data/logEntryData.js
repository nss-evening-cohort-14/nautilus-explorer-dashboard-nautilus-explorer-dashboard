import axios from 'axios';
import 'firebase/auth';
import firebase from 'firebase';
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
// SEE ONLY PUBLIC LOGS WHEN LOGGED OUT
const seePublicLogs = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/logEntry.json?orderBy="shared"&equalTo=false`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getSingleLogEntry = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/logEntry/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const editLogEntry = (firebaseKey, logObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/logEntry/${firebaseKey}.json`, logObject)
    .then(() => getLogEntry(firebase.auth().currentUser.uid)).then((logArray) => resolve(logArray))
    .catch((error) => reject(error));
});

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

export {
  getLogEntry,
  editLogEntry,
  getSingleLogEntry,
  createNewLog,
  seePublicLogs
};
