import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
import logoutButton from '../components/buttons/logoutButton';
import startApp from '../views/startApp';
import firebaseConfig from './auth/apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    startApp();
    if (user) {
      logoutButton();
    } else {
      loginButton();
    }
  });
};

export default checkLoginStatus;
