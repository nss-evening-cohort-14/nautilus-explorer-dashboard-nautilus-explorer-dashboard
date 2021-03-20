// import selectDestination from './selectDestination';

const addSpeciesForm = () => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="submit-species-form" class="mb-4">
    <div class="form-group">
    <label for="addSpeciesName">Species Name</label>
    <input type="text" class="form-control" id="addSpeciesName" aria-describedby="addSpeciesName" placeholder="Enter Name" required>
  </div>
      <div class="form-group">
        <label for="addSpeciesDescription">Species Description</label>
        <input type="text" class="form-control" id="addSpeciesDescription" aria-describedby="addSpeciesDescription" placeholder="Enter Description" required>
      </div>
      <div class="form-group">
        <label for="addSpeciesImage">Image URL</label>
        <input type="url" class="form-control" id="addSpeciesImage" placeholder="Image URL" required>
      </div>
      <div class="form-group" id="select-destination">
      </div>
      <button type="submit" id="submit-species" class="btn submitSpeciesBtn">Submit Species</button>
    </form>`;

  // selectDestination();
};

export default addSpeciesForm;
