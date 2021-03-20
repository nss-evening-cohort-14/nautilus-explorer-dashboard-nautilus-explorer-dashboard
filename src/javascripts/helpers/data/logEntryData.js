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

export { getLogEntry, editLogEntry, getSingleLogEntry };
