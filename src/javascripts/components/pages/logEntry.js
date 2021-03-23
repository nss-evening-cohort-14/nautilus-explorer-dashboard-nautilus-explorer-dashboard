const showLogEntry = (logArray, user) => {
  if (user) {
    document.querySelector('#addButton').innerHTML = '<button type="button" class="btn btn-sm mb-4" id="addLogEntry">Add Log Entry</button>';
  }
  document.querySelector('#formContainer').innerHTML = '';
  document.querySelector('#cardContainer').innerHTML = '<div id="readLogEntry"></div>';

  logArray.forEach((element) => {
    document.querySelector('#readLogEntry').innerHTML += `<div class="card" id="log-entry-card">
    <div class="card-body">
      <h5 id="log-title--${element.firebaseKey}" class="card-title">${element.title}</h5>
      <p class="card-text" id="log-body">${element.body}</p>
      <p class="card-text" id="log-timestamp">${element.timestamp}</p>
      <p class="card-text" id="log-timezone">${element.timezone}</p>
    <div class="form-check mb-2">
      ${user ? `<input class="form-check-input" type="checkbox" ${element.shared && 'checked'} id="log-private">
      <label class="form-check-label" for="private">Private</label>` : ''}
    </div>
      ${user ? `<button type="button" class="btn btn-sm mb-4 updateLogBtn" data-toggle="modal" data-target="#formModal" id="edit-log--${element.firebaseKey}">Update Log</button>
      <button type="button" class="btn btn-sm mb-4 deleteLogBtn" id="delete-log--${element.firebaseKey}">Delete Log</button>` : ''}
    </div>
    </div>`;
  });
};

const emptyLogEntry = (user) => {
  if (user) {
    document.querySelector('#addButton').innerHTML = '<button type="button" class="btn btn-sm mb-4" id="addLogEntry">Add Log Entry</button>';
  }
  document.querySelector('#cardContainer').innerHTML = '<h1>Log, lest you get decked</h1>';
};

export { showLogEntry, emptyLogEntry };
