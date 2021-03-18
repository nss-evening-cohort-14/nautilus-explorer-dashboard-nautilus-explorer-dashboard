import firebase from 'firebase/app';
import 'firebase/auth';
import showCrew from '../components/crew';
import loginButton from '../components/buttons/loginButton';
import logoutButton from '../components/buttons/logoutButton';
import firebaseConfig from './auth/apiKeys';
import getCrew from './data/crewData';
import startApp from '../views/startApp';
import getSpecies from './data/crudSpecies';
import { showReadSpecies } from '../components/species';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    startApp(user);
    if (user) {
      logoutButton();
    } else {
      loginButton();
    }
    getCrew().then((crewArray) => showCrew(crewArray, user));
    getSpecies().then((speciesArray) => showReadSpecies(speciesArray, user));
  });
};

export default checkLoginStatus;
