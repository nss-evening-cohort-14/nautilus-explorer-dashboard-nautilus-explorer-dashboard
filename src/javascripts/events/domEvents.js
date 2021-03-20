import 'firebase/auth';
import { showLogEntry } from '../components/pages/logEntry';
import { deleteLogEntry } from '../helpers/data/logEntryData';
// import formModal from '../components/forms/formModal';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-log')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?'));
      const firebaseKey = e.target.id.split('--')[1];
      deleteLogEntry(firebaseKey, uid).then((logArray) => showLogEntry(logArray));
    }
  });
};

export default domEvents;
