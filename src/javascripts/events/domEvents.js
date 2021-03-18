import 'firebase/auth';
import addLogForm from '../components/forms/addLogForm';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
  // CLICK TO SHOW ADD NEW LOG
    if (e.target.id.includes('addLogEntry')) {
      addLogForm();
    }
  });
};

export default domEvents;
