import signOut from '../../helpers/auth/signOut';
import captain from '../../../assets/captain.png';

const logoutButton = () => {
  const domString = `<button id="google-auth" class="btn">
  <img src= ${captain}></button>`;
  document.querySelector('#loginLogoutButton').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
