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

const excursionDestinations = (excursionID) => new Promise((resolve, reject) => {
  // const board = getSingleBoard(boardID);
  // const boardPins = getBoardPins(boardID);
  // Promise.all([board, boardPins])
  //   .then((response) => resolve(response))
  //   .catch((error) => reject(error));
  debugger;
  const listOfExcursionDestinations = getExcursionDestinations(excursionID);
  const getDestinations = listOfExcursionDestinations.map((destination) => getSingleDestination(destination.destinationID));
  Promise.all(getDestinations)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export default excursionDestinations;
