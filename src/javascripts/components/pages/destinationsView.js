const destinationsView = (user, destinationsArray) => {
  $('#formContainer')
    .html(`<div class="modal fade" id="destinationModal" tabindex="-1" aria-labelledby="destinationModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="destinationModalLabel">Destination Form</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary">Add Destination</button>
                </div>
              </div>
            </div>
          </div>`);

  $('#addButton').html(
    user
      ? '<button type="button" class="btn btn-new-destination" data-bs-toggle="modal" data-bs-target="#destinationModal">Add New Destination</button>'
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
