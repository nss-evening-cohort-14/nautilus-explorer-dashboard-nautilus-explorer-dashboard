import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  navigationEvents(user);
};

export default startApp;
