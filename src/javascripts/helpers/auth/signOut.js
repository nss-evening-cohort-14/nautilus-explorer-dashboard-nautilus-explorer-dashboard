import firebase from 'firebase/app';
import 'firebase/auth';
import domEvents from '../../events/domEvents';
import dashboardEvents from '../../events/hideCreate';

const signOut = () => {
  document.querySelector('body').removeEventListener('click', domEvents);
  document.querySelector('body').removeEventListener('click', dashboardEvents);
  firebase.auth().signOut();
  window.location.reload();
};

export default signOut;
