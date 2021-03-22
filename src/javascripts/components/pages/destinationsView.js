const destinationsView = (user, destinationsArray) => {
  $('#formContainer')
    .html(`<div class="modal fade" id="destinationModal" tabindex="-1" aria-labelledby="destinationModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="destinationModalLabel">New Destination</h5>
                </div>
                <div class="modal-body">
                  <form id="newDestinationForm">
                    <div class="mb-3">
                      <label for="destinationName" class="form-label">Name</label>
                      <input type="text" class="form-control" id="destinationName" required>
                    </div>
                    <div class="mb-3">
                      <label for="destinationImage" class="form-label">Image URL</label>
                      <input type="url" class="form-control" id="destinationImage" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Destination</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>`);

  $('#addButton').html(
    user
      ? '<button type="button" class="btn btn-hj-primary" data-toggle="modal" data-target="#destinationModal" id="newDestinationButton">Add New Destination</button>'
      : '',
  );

  if (destinationsArray) {
    let domString = '<div class="d-flex flex-wrap justify-content-around">';
    destinationsArray.forEach((destination) => {
      domString += `<div class="card m-2" style="width: 18rem;">
                      <img src="${destination.image}" class="card-img-top" alt="${destination.name}">
                      <div class="card-body">
                        <h5 class="card-title">${destination.name}</h5>
                      </div>
                    </div>`;
    });
    domString += '</div>';
    $('#cardContainer').html(domString);
  } else {
    $('#cardContainer').html('<h2>No Land In Sight!</h2>');
  }
};

export default destinationsView;
