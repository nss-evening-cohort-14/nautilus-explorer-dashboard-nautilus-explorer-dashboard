const destinationsView = (destinationsArray) => {
  $('#addButton').html('');
  $('#formContainer').html('');

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
