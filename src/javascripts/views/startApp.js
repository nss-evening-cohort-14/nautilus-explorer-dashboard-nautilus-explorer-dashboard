import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';
import dashboardView from '../components/pages/dashboardView';
import { dashboardEvents, domEvents } from '../events/domEvents';

const startApp = (user) => {
  domBuilder(); // builds all divs for project
  navBar(); // populates #navigation with nav bar items
  navigationEvents(user); // enables clicks from #navigation
  dashboardEvents(user);
  if (user) {
    domEvents(user);
  } // listens for button clicks inside #mainContainer
  dashboardView(user);
};

export default startApp;
