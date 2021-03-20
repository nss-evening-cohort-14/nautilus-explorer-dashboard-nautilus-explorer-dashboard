const editCrewForm = (crewObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-crew-form" class="mb-4">
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" placeholder="First Name" value="${crewObject.firstname}" required>
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" class="form-control" id="lastName" placeholder="Last Name" value="${crewObject.lastname}" required>
    </div>
    <div class="form-group">
      <label for="title">Job</label>
      <input type="text" class="form-control" id="title" placeholder="Title" value="${crewObject.job}" required>
    </div>
    <div class="form-group">
      <label for="tenure">Tenure</label>
      <input type="number" class="form-control" id="tenure" placeholder="Tenure (months)" value="${crewObject.months_tenure}" required>
    </div>
    <div class="form-group">
      <label for="image">Image</label>
      <input type="url" class="form-control" id="image" placeholder="Image Url" value="${crewObject.image}" required>
    </div>
    <button type="submit" id="submit-edit-crew--${crewObject.firebaseKey}" class="btn btn-primary">Update</button>
  </form>`;
};

export default editCrewForm;
