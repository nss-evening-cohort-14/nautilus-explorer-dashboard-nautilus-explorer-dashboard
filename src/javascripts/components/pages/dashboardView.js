const dashboardView = (user) => {
  $('#addButton').html('');
  $('#formContainer').html('');

  $('#cardContainer').html(`<h1 id="dashboardHeader">Nautilus Explorer Dashboard</h1>
                  ${user ? '<h2>Welcome Aboard, Captain!</h2>' : ''}
                  <div id="pageCardsContainer">
                    <div class="width-50">
                      <div class="card dashboard-card">
                        <div class="card-body">
                          <h3 class="card-title">Crew Members</h3>
                          <button type="button" class="btn btn-primary" id="crewView">Go there!</button>
                        </div>
                      </div>
                    </div>
                    <div class="width-50">
                      <div class="card dashboard-card">
                        <div class="card-body">
                          <h3 class="card-title">Destinations</h3>
                          <button type="button" class="btn btn-primary" id="destinationsView">Go there!</button>
                        </div>
                      </div>
                    </div>
                    <div class="width-50">
                      <div class="card dashboard-card">
                        <div class="card-body">
                          <h3 class="card-title">Log Entries</h3>
                          <button type="button" class="btn btn-primary" id="logsView">Go there!</button>
                        </div>
                      </div>
                    </div>
                    <div class="width-50">
                      <div class="card dashboard-card">
                        <div class="card-body">
                          <h3 class="card-title">Environmental Variables</h3>
                          <button type="button" class="btn btn-primary" id="variablesView">Go there!</button>
                        </div>
                      </div>
                    </div>
                    <div class="width-100">
                      <div class="card dashboard-card">
                        <div class="card-body">
                          <h3 class="card-title">Species</h3>
                          <button type="button" class="btn btn-primary" id="speciesView">Go there!</button>
                        </div>
                      </div>
                    </div>
                  </div>
  `);
};

export default dashboardView;