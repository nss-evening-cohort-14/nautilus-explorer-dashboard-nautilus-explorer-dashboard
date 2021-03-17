const showCrew = (crewArray, user) => {
  // CREATE TEMPORARY DIV TO HOLD CREW DATA
  document.querySelector('#mainContainer').innerHTML = '<div id="crewPlaceholder" class="row justify-content-center p-5 mx-5 mt-3 mb-5 rounded shadow-lg"></div>';

  // BUILD CREW CARDS
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
          ${user ? `<button class="btn btn-info shadow-lg" data-toggle="modal" data-target="#formModal" id="update-board-btn--${member.firebaseKey}">Update Info</button>
          <button class="btn btn-danger shadow-lg" id="delete-member--${member.firebaseKey}">Remove Personnel</button>` : ''}
        </div>
      </div>
    </div>
    `;
  });
};

export default showCrew;
