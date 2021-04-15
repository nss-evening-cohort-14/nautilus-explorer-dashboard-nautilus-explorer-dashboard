import selectCrew from './selectCrew';
import selectDestination from './selectDestination';
import selectEnvironmental from './selectEnvironmental';
import selectLogEntry from './selectLogEntry';
import selectSpecies from './selectSpecies';

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
      </div>
      <div class="form-group" id="select-crew">
      </div>
      </div>
      <div class="form-group" id="select-logEntry">
      </div>
      </div>
      <div class="form-group" id="select-environmental">
      </div>
      </div>
      <div class="form-group" id="select-species">
      </div>
      <button type="submit" id="submit-excursion" class="btn submitExcursionBtn">Create Excursion</button>
    </form>`;

  selectDestination(excursionObject);
  selectEnvironmental(excursionObject);
  selectLogEntry(excursionObject);
  selectSpecies(excursionObject);
  selectCrew(excursionObject);
};

export default addExcursionForm;
