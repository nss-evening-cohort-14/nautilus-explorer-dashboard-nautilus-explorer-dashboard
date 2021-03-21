const showCrew = (crewArray, user) => {
  // BUILD CREW CARDS
  if (user) {
    document.querySelector('#addButton').innerHTML = '<button type="button" class="btn btn-primary" id="addCrewButton">Add Crew Member</button>';
  }
  document.querySelector('#formContainer').innerHTML = '';
  document.querySelector('#cardContainer').innerHTML = '<div id="crewPlaceholder" class="row d-flex justify-content-center p-5 mx-5 mt-3 mb-5 rounded shadow-lg"></div>';

  crewArray.forEach((member) => {
    document.querySelector('#crewPlaceholder').innerHTML += `
    <div class="col-sm-3">
      <div class="card v-25 m-3 p-4 shadow-lg rounded">
        <h5 class="card-title">${member.firstname} ${member.lastname}</h5>
        <img class="card-img-top px-2 shadow-lg rounded overflow-hidden" src=${member.image} alt="picture of ${member.firstname} ${member.lastname}">
        <div class="card-body">
          <span>${member.job}</span> <br>
          <span>Tenure: ${member.months_tenure} months</span>
          <hr>
          ${user ? `<button class="btn btn-info shadow-lg" data-toggle="modal" data-target="#formModal" id="update-crew--${member.firebaseKey}">Details</button>
          <button class="btn btn-danger shadow-lg" id="delete-crew--${member.firebaseKey}">Disembark</button>` : ''}
        </div>
      </div>
    </div>
    `;
  });
};

const emptyCrew = () => {
  document.querySelector('#addButton').innerHTML = '<button type="button" class="btn btn-primary" id="addCrewButton">Add Crew Member</button>';
  document.querySelector('#cardContainer').innerHTML = '<h1>Abandon ship!</h1>';
};

export { showCrew, emptyCrew };
