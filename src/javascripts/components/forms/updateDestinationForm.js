const updateDestinationForm = (destinationObject) => {
  $('#addButton').html('');
  $('#cardContainer').html('');

  $('#formContainer').html(`<h1 class="text-center">Edit ${destinationObject.name}</h2>
                            <form class="w-75 mx-auto" id="updateDestinationForm--${destinationObject.firebaseKey}">
                              <div class="mb-3">
                                <label for="destinationName" class="form-label">Name</label>
                                <input type="text" class="form-control" id="destinationName" required>
                              </div>
                              <div class="mb-3">
                                <label for="destinationImage" class="form-label">Image URL</label>
                                <input type="url" class="form-control" id="destinationImage" required>
                              </div>
                              <button type="submit" class="btn btn-primary">Confirm Changes</button>
                            </form>`);

  $('#destinationName').val(destinationObject.name);
  $('#destinationImage').val(destinationObject.image);
};

export default updateDestinationForm;
