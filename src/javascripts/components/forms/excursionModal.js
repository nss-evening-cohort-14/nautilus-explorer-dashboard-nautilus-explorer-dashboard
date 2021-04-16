function getListOfItemsToDisplay(arrayOfObjects, displayType) {
  let buidString = '';
  if (displayType === 'crewMembers') {
    buidString = '<ul>';
    console.warn(arrayOfObjects);
    arrayOfObjects.forEach((crewMembers) => {
      buidString += `<li>${crewMembers.firstname} ${crewMembers.lastname}</li>`;
    });
    buidString += '</ul>';
  } else if (displayType === 'logEntries') {
    buidString = '<ul>';
    arrayOfObjects.forEach((logEntry) => {
      buidString += `<li>${logEntry.title}</li>`;
    });
    buidString += '</ul>';
  } else if (displayType === 'enviromentalData') {
    buidString = '';
  } else if (displayType === 'species') {
    buidString = '';
  }
  return buidString;
}

const formExcursionModal = (modalTitle, arrayOfObjects, displayType) => {
  document.querySelector('#formContainer').innerHTML = `
  <div class="modal fade" id="formExcursionModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="formModalLabel">${modalTitle}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="modal-body">
        ${getListOfItemsToDisplay(arrayOfObjects, displayType)}
        </div>
      </div>
    </div>
  </div>`;
};

export default formExcursionModal;
