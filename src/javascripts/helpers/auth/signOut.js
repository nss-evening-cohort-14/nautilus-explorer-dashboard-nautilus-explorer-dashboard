import firebase from 'firebase/app';
import 'firebase/auth';
import { dashboardEvents, domEvents } from '../../events/domEvents';

const signOut = () => {
  document.querySelector('body').removeEventListener('click', domEvents);
  document.querySelector('body').removeEventListener('click', dashboardEvents);
  firebase.auth().signOut();
  window.location.reload();
};

export default signOut;
