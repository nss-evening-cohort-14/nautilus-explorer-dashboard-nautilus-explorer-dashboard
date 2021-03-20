const showLogEntry = (logArray, user) => {
  document.querySelector('#addButton').innerHTML = '<button type="button" class="btn btn-primary" id="addLogEntry">Add Log Entry</button>';
  document.querySelector('#formContainer').innerHTML = '';
  document.querySelector('#cardContainer').innerHTML = '<div id="readLogEntry"></div>';

  logArray.forEach((element) => {
    document.querySelector('#readLogEntry').innerHTML += `<div class="card" id="log-entry-card">
    <div class="card-body" style="height: 300px;">
      <h5 id="log-title--${element.firebaseKey}" class="card-title">${element.title}</h5>
      <p class="card-text" id="log-body">${element.body}</p>
      <p class="card-text" id="log-timestamp">${element.timestamp}</p>
      <p class="card-text" id="log-timezone">${element.timezone}</p>
    <div class="form-check mb-2">
      ${user ? `<input class="form-check-input" type="checkbox" ${element.shared && 'checked'} id="log-private">
      <label class="form-check-label" for="private">Private</label>` : ''}
    </div>
      ${user ? `<button type="button" class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-log--${element.firebaseKey}">Update Log</button>
      <button type="button" class="btn btn-danger" id="delete-log--${element.firebaseKey}">Delete Log</button>` : ''}
    </div>
    </div>`;
  });
};

const emptyLogEntry = () => {
  document.querySelector('#addButton').innerHTML = '<button type="button" class="btn btn-primary" id="addLogEntry">Add Log Entry</button>';
  document.querySelector('#cardContainer').innerHTML = '<h1>Log, lest you get decked</h1>';
};

export { showLogEntry, emptyLogEntry };
