const showLogEntry = (logArray, user) => {
  document.querySelector('#button').innerHTML = '<button type="button class="btn btn-primary" id="addLogEntry">Add Log Entry</button>';
  document.querySelector('#seeCrew').innerHTML = '';
  document.querySelector('#readLogEntry').innerHTML = '';

  logArray.forEach((element) => {
    document.querySelector('#readLogEntry').innerHTML += `<div class="card">
    <div class="card-body" style="height: 250px;">
      <h5 id="log-title--${element.firebaseKey}" class="card-title">${element.title}</h5>
      <p class="card-text" id="log-body">${element.body}</p>
      <p class="card-text" id="log-timestamp">${element.timestamp}</p>
      <p class="card-text" id="log-timezone">${element.timezone}</p>
    <div class="form-check">
      ${user ? `<input class="form-check-input" type="checkbox" value="${element.shared}" id="log-private">` : ''}
      <label class="form-check-label" for="defaultCheck1">
      Private
      </label>
      ${user ? '<button type="button" class="btn btn-info">Edit Log</button>' : ''}
      ${user ? '<button type="button" class="btn btn-danger">Delete Log</button>' : ''}
    </div>
    </div>`;
  });
};

const emptyLogEntry = () => {
  document.querySelector('#button').innerHTML = '<button type="button class="btn btn-primary" id="addLogEntry">Add Log Entry</button>';
  document.querySelector('#readLogEntry').innerHTML = '<h1>Log, lest you get decked</h1>';
};

export { showLogEntry, emptyLogEntry };
