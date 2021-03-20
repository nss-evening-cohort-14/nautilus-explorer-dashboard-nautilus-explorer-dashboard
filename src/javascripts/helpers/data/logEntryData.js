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

export { getLogEntry, seePublicLogs };
