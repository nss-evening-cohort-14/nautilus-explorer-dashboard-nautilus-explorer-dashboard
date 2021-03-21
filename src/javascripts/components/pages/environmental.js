const showEnvironmental = (environmentalArray, user) => {
  // BUILD ENVIRONMENT CARDS
  if (user) {
    document.querySelector('#addButton').innerHTML = '<button type="button" class="btn btn-primary" id="addEnvironmentalButton">Add Environmental Data</button>';
  }
  document.querySelector('#formContainer').innerHTML = '';
  document.querySelector('#cardContainer').innerHTML = '<div id="environmentalPlaceholder" class="row d-flex justify-content-center p-5 mx-5 mt-3 mb-5 rounded shadow-lg"></div>';

  environmentalArray.forEach((entry) => {
    document.querySelector('#environmentalPlaceholder').innerHTML += `
    <div class="col-sm-3">
      <div class="card v-25 m-3 p-4 shadow-lg rounded">
        <h5 class="card-title">${entry.destination_id}</h5>
        <div class="card-body">
          <span>Current: ${entry.current}</span> <br>
          <span>Depth: ${entry.depth}</span> <br>
          <span>Coordinates: ${entry.latitude}, ${entry.longitude}</span> <br>
          <span>Pressure: ${entry.pressure}</span> <br>
          <span>Temperature: ${entry.temperature}</span> <br>
          <span>Entry Date: ${entry.timestamp} months</span>
          <hr>
          ${user ? `<button class="btn btn-info shadow-lg" data-toggle="modal" data-target="#formModal" id="update-environmental--${entry.firebaseKey}">Variables</button>
          <button class="btn btn-danger shadow-lg" id="delete-environmental--${entry.firebaseKey}">Delete</button>` : ''}
        </div>
      </div>
    </div>
    `;
  });
};

const emptyEnvironmental = (user) => {
  if (user) {
    document.querySelector('#addButton').innerHTML = '<button type="button" class="btn btn-primary" id="addEnvironmentalButton">Add Environmental Data</button>';
  }
  document.querySelector('#cardContainer').innerHTML = '<h1>Environment Undocumented</h1>';
};

export { showEnvironmental, emptyEnvironmental };
