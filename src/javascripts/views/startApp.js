import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import dashboardView from '../components/pages/dashboardView';

const startApp = (user) => {
  domBuilder(); // builds all divs for project
  navBar(); // populates #navigation with nav bar items
  navigationEvents(user); // enables clicks from #navigation
  domEvents(user); // listens for button clicks inside #mainContainer
<<<<<<< HEAD
=======
  dashboardView(user);
>>>>>>> development
};

export default startApp;
