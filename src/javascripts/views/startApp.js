import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(); // builds all divs for project
  navBar(); // populates #navigation with nav bar items
  navigationEvents(user); // enables clicks from #navigation
  domEvents(user); // listens for button clicks inside #mainContainer
};

export default startApp;
