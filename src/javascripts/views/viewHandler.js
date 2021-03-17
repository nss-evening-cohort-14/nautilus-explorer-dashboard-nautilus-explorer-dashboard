import dashboardView from './_dashboardView';

const viewHandler = (view, user) => {
  switch (view) {
    case 'dashboard':
      dashboardView(user);
      break;
    default:
      break;
  }
};

export default viewHandler;
