const addLogForm = () => {
  document.querySelector('#readLogEntry').innerHTML = '';
  document.querySelector('#formContainer').innerHTML = `
  <form id="add-log-form" class="mb-4">
  <div class="form-group">
    <label for="title">Log Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="logTitle" placeholder="Enter Log Title" required>
  </div>
  <div class="form-group">
    <label for="Textarea">Log Body</label>
    <textarea class="form-control" id="body" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="timestamp">Timestamp</label>
    <input type="text" class="form-control" id="timestamp" placeholder="Timestamp" required>
  </div>
    <div class="form-group">
    <label for="timezone">Timezone</label>
    <input type="text" class="form-control" id="timezone" placeholder="Timezone" required>
  </div>
  </div>
    <div class="form-check mb-2">
    <input class="form-check-input" type="checkbox" id="log-private">
    <label class="form-check-label" for="private">Private</label>
  </div>
  <button type="submit" id="add-log" class="btn btn-primary">Add Log</button>
</form>`;
};

export default addLogForm;
