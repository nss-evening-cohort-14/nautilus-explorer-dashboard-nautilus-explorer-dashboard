import firebase from 'firebase/app';
import 'firebase/auth';
import showCrew from '../components/crew';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import firebaseConfig from './apiKeys';
import getCrew from './data/crewData';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      logoutButton();
    } else {
      // person is NOT logged in
      loginButton();
    }
    getCrew().then((crewArray) => showCrew(crewArray, user));
  });
};

export default checkLoginStatus;
