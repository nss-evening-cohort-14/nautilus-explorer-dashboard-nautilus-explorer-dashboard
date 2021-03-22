const crewForm = () => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="submit-crew-form" class="mb-4">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="text" class="form-control" id="firstName" placeholder="First Name" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Last Name" required>
      </div>
      <div class="form-group">
        <label for="title">Job</label>
        <input type="text" class="form-control" id="title" placeholder="Title" required>
      </div>
      <div class="form-group">
        <label for="tenure">Tenure</label>
        <input type="number" class="form-control" id="tenure" placeholder="Tenure (months)" required>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="url" class="form-control" id="image" placeholder="Image Url" required>
      </div>
      <button type="submit" id="submit-crew" class="btn btn-primary">Submit Member</button>
    </form>`;
};

export default crewForm;
