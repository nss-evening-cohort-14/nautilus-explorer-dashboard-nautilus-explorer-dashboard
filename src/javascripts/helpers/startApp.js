import viewHandler from '../views/viewHandler';

const startApp = (user) => {
  viewHandler('dashboard', user);
};

export default startApp;
