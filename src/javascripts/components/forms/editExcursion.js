import selectDestination from './selectDestination';

const editExcursionForm = (excursionObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-excursion-form--${excursionObject.firebaseKey}" class="mb-4">
    <div class="form-group">
    <label for="editExcursionName">Excursion Name</label>
    <input type="text" class="form-control" id="editExcursionName" aria-describedby="editExcursionName" placeholder="Enter Name" value="${excursionObject.name}" required>
  </div>
      <div class="form-group">
        <label for="editExcursionDescription">Excursion Description</label>
        <input type="text" class="form-control" id="editExcursionDescription" aria-describedby="editExcursionDescription" placeholder="Enter Description" value="${excursionObject.description}" required>
      </div>
      <div class="form-group">
        <label for="editExcursionImage">Image URL</label>
        <input type="url" class="form-control" id="editExcursionImage" placeholder="Image URL" value="${excursionObject.img}" required>
      </div>
      <div class="form-group" id="select-destination">
      </div>
      <button type="submit" id="submit-edit-existing-excursion" class="btn submitExcursionBtn">Update Excursion</button>
    </form>`;

  selectDestination(excursionObject);
};

export default editExcursionForm;
