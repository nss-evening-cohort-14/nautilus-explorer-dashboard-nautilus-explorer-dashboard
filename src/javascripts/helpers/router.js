import firebase from 'firebase/app';
import 'firebase/auth';
<<<<<<< HEAD:src/javascripts/helpers/auth.js
import showCrew from '../components/crew';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import firebaseConfig from './apiKeys';
import getCrew from './data/crewData';
=======
import loginButton from '../components/buttons/loginButton';
import logoutButton from '../components/buttons/logoutButton';
import startApp from '../views/startApp';
import firebaseConfig from './auth/apiKeys';
>>>>>>> 564e0a8d94df0a8ff01abbd167ac30629365b405:src/javascripts/helpers/router.js

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    startApp();
    if (user) {
      logoutButton();
    } else {
      loginButton();
    }
    getCrew().then((crewArray) => showCrew(crewArray, user));
  });
};

export default checkLoginStatus;
