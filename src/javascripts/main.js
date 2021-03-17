import checkLoginStatus from './helpers/router';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  checkLoginStatus();
};

init();
