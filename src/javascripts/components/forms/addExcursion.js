import selectDestination from './selectDestination';

const addExcursionForm = (excursionObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="submit-excursion-form" class="mb-4">
    <div class="form-group">
    <label for="addExcursionName">Excursion Name</label>
    <input type="text" class="form-control" id="addExcursionName" aria-describedby="addExcursionName" placeholder="Enter Name" required>
  </div>
      <div class="form-group">
        <label for="addExcursionDescription">Excursion Description</label>
        <input type="text" class="form-control" id="addExcursionDescription" aria-describedby="addExcursionDescription" placeholder="Enter Description" required>
      </div>
      <div class="form-group">
        <label for="addExcursionImage">Image URL</label>
        <input type="url" class="form-control" id="addExcursionImage" placeholder="Image URL" required>
      </div>
      <div class="form-group" id="select-destination">
      </div>
      <button type="submit" id="submit-excursion" class="btn submitExcursionBtn">Create Excursion</button>
    </form>`;

  selectDestination(excursionObject);
};

export default addExcursionForm;
