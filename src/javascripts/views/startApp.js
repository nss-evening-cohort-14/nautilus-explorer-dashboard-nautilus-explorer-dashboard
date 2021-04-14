import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import navigationEvents from '../events/navigationEvents';
import dashboardView from '../components/pages/dashboardView';
import domEvents from '../events/domEvents';
import dashboardEvents from '../events/hideCreate';

const startApp = (user) => {
  domBuilder(); // builds all divs for project
  navBar(); // populates #navigation with nav bar items
  navigationEvents(user); // enables clicks from #navigation
  dashboardEvents();
  // dashboardEvents(user);
  if (user) {
    document.querySelector('body').removeEventListener('click', dashboardEvents);
    domEvents(user);
  }
  dashboardView(user);
};

export default startApp;
