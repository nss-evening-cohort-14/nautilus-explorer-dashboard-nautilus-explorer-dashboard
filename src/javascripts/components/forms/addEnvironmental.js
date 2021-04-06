import selectDestination from './selectDestination';

const addEnvironmentalVariableForm = (variableObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="submit-environmental-form" class="mb-4">
    <div class="form-group">
    <label for="addEnvName"> Environmental Variable</label>
    <input type="text" class="form-control" id="addEnvName" aria-describedby="addEnvName" placeholder="Enter Name" required>
  </div>
      <div class="form-group">
        <label for="addEnvCurrent">Current</label>
        <input type="text" class="form-control" id="addEnvCurrent" aria-describedby="addEnvCurrent" placeholder="Enter Current" required>
      </div>
      <div class="form-group">
        <label for="addEnvDepth">Depth</label>
        <input type="text" class="form-control" id="addEnvDepth" aria-describedby="addEnvDepth" placeholder="Enter Depth" required>
      </div>
      <div class="form-group">
        <label for="addEnvLatitude">Latitude</label>
        <input type="text" class="form-control" id="addEnvLatitude" aria-describedby="addEnvLatitude" placeholder="Enter Latitude" required>
      </div>
      <div class="form-group">
        <label for="addEnvLongitude">Longitude</label>
        <input type="text" class="form-control" id="addEnvLongitude" aria-describedby="addEnvLongitude" placeholder="Enter Longitude" required>
      </div>
      <div class="form-group">
        <label for="addEnvPressure">Pressure</label>
        <input type="text" class="form-control" id="addEnvPressure" aria-describedby="addEnvPressure" placeholder="Enter Pressure" required>
      </div>
      <div class="form-group">
        <label for="addEnvTemperature">Temperature</label>
        <input type="text" class="form-control" id="addEnvTemperature" aria-describedby="addEnvTemperature" placeholder="Enter Temperature" required>
      </div>
      <div class="form-group" id="select-destination">
      </div>
      <button type="submit" id="submit-environmental-variable" class="btn submitEnvironmentalBtn">Submit Environmental Data</button>
    </form>`;

  selectDestination(variableObject);
};

export default addEnvironmentalVariableForm;
