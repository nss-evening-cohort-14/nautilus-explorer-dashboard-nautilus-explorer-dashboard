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

const getSingleEnvironmentalVariable = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/environmentalVariable/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// DELETE ENVIRONMENTAL DATA
const deleteEnvirontalVariable = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/environmentalVariable/${firebaseKey}.json`)
    .then(() => getEnvironmental(uid).then((variableArray) => resolve(variableArray)))
    .catch((error) => reject(error));
});

const updateEnvironmentalVariable = (firebaseKey, environmentalVariableObject) => new Promise((resolve, reject) => {
  axios
    .patch(
      `${dbUrl}/environmentalVariable/${firebaseKey}.json`,
      environmentalVariableObject,
    )
    .then(() => {
      getEnvironmental().then((environmentalVariableArray) => {
        resolve(environmentalVariableArray);
      });
    })
    .catch((error) => reject(error));
});

export {
  getEnvironmental, getSingleEnvironmentalVariable, deleteEnvirontalVariable, updateEnvironmentalVariable
};
