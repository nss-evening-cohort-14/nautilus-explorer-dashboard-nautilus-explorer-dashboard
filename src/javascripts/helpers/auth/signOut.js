import firebase from 'firebase/app';
import 'firebase/auth';
import domEvents from '../../events/domEvents';

const signOut = () => {
  document.querySelector('body').removeEventListener('click', domEvents);
  firebase.auth().signOut();
  window.location.reload();
};

export default signOut;
