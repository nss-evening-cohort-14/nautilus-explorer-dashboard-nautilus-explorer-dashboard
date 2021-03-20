import 'bootstrap';
import '../styles/main.scss';
import checkLoginStatus from './helpers/router';

const init = () => {
  checkLoginStatus();
};

init();
