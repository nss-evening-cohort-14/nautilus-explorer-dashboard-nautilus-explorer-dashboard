import captain from '../../../assets/captain.png';
import signIn from '../../helpers/auth/signIn';

const loginButton = () => {
  const domString = `<button id="google-auth" class="btn" ><img src= ${captain}>LOGIN</button>`;
  document.querySelector('#loginLogoutButton').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
