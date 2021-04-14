import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
import { getSingleDestination } from './destinationsData';

const dbUrl = firebaseConfig.databaseURL;

const getExcursionDestinations = (excursionID) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/manageDestinations/.json?orderBy="excursionId"&equalTo="${excursionID}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSingleDestinationfromManageDestinations = (excursionID) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/manageDestinations.json?orderBy="excursionID"&equalTo="${excursionID}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const excursionDestinations = (excursionID) => new Promise((resolve, reject) => {
  const listOfExcursionDestinations = getExcursionDestinations(excursionID);
  const getDestinations = listOfExcursionDestinations.map((destination) => getSingleDestination(destination.destinationID));
  Promise.all(getDestinations)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const createExcursionDestination = (excursionIDArg, destinationIdArg) => new Promise((resolve, reject) => {
  const excursionObject = {
    excursionID: excursionIDArg,
    destinationID: destinationIdArg,
  };
  axios.post(`${dbUrl}/manageDestinations.json`, excursionObject)
    .then((response) => {
      const body = { manageDestinationsID: response.data.name };
      axios.patch(`${dbUrl}/manageDestinations/${response.data.name}.json`, body)
        .then(() => {});
    }).catch((error) => reject(error));
});

const deleteExcursionDestination = (excursionID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/manageDestinations.json?orderBy="excursionID"&equalTo="${excursionID}"`)
    .then((response) => {
      const manageDestinationsID = Object.values(response.data);
      const manageDestinationsID2 = manageDestinationsID[0].manageDestinationsID;
      axios.delete(`${dbUrl}/manageDestinations/${manageDestinationsID2}.json`)
        .then(() => {});
    }).catch((error) => reject(error));
});

export {
  excursionDestinations, createExcursionDestination, getSingleDestinationfromManageDestinations, deleteExcursionDestination
};
