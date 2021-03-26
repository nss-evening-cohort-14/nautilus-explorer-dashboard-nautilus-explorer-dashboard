const updateEnvironmentalVariableForm = (environmentalVariableObject) => {
  $('#addButton').html('');
  $('#cardContainer').html('');

  $('#formContainer')
    .html(`<form id="updateEnvironmentalVariableForm--${environmentalVariableObject.firebaseKey}" class="mb-4 mx-auto w-75">
            <div class="form-group">
              <label for="environmentalVariableCurrent">Current</label>
              <input type="text" class="form-control" id="environmentalVariableCurrent" required>
            </div>
            <div class="form-group">
              <label for="environmentalVariableDepth">Depth</label>
              <input type="text" class="form-control" id="environmentalVariableDepth" required>
            </div>
            <div class="form-group">
              <label for="environmentalVariableLatitude">Latitude</label>
              <input type="text" class="form-control" id="environmentalVariableLatitude" required>
            </div>
            <div class="form-group">
              <label for="environmentalVariableLongitude">Longitude</label>
              <input type="text" class="form-control" id="environmentalVariableLongitude" required>
            </div>
            <div class="form-group">
              <label for="environmentalVariablePressure">Pressure</label>
              <input type="text" class="form-control" id="environmentalVariablePressure" required>
            </div>
            <div class="form-group">
              <label for="environmentalVariableTemperature">Temperature</label>
              <input type="text" class="form-control" id="environmentalVariableTemperature" required>
            </div>
            <button type="submit" id="submitUpdateEnvironmentalVariableForm--${environmentalVariableObject.firebaseKey}" class="btn btn-hj-primary">Submit Environmental Data</button>
            </form>`);

  $('#environmentalVariableCurrent').val(environmentalVariableObject.current);
  $('#environmentalVariableDepth').val(environmentalVariableObject.depth);
  $('#environmentalVariableLatitude').val(environmentalVariableObject.latitude);
  $('#environmentalVariableLongitude').val(environmentalVariableObject.longitude);
  $('#environmentalVariablePressure').val(environmentalVariableObject.pressure);
  $('#environmentalVariableTemperature').val(environmentalVariableObject.temperature);
};

export default updateEnvironmentalVariableForm;
