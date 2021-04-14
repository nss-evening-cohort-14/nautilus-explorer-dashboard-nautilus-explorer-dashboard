// import selectDestination from './selectDestination';

const editSpeciesForm = (speciesObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-species-form--${speciesObject.firebaseKey}" class="mb-4">
    <div class="form-group">
    <label for="editSpeciesName">Species Name</label>
    <input type="text" class="form-control" id="editSpeciesName" aria-describedby="editSpeciesName" placeholder="Enter Name" value="${speciesObject.name}" required>
  </div>
      <div class="form-group">
        <label for="editSpeciesDescription">Species Description</label>
        <input type="text" class="form-control" id="editSpeciesDescription" aria-describedby="editSpeciesDescription" placeholder="Enter Description" value="${speciesObject.description}" required>
      </div>
      <div class="form-group">
        <label for="editSpeciesImage">Image URL</label>
        <input type="url" class="form-control" id="editSpeciesImage" placeholder="Image URL" value="${speciesObject.image}" required>
      </div>
      // <div class="form-group" id="select-destination"></div>
      <button type="submit" id="submit-edit-existing-species" class="btn submitSpeciesBtn">Update Species</button>
    </form>`;

  // selectDestination(speciesObject);
};

export default editSpeciesForm;
