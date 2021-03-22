const editLogForm = (logObject) => {
  document.querySelector('#modal-body').innerHTML = `<form id="edit-log-form--${logObject.firebaseKey}" class="mb-4">
  <div class="form-group">
    <label for="title">Log Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="logTitle" placeholder="Enter Log Title" value="${logObject.title}" required>
  </div>
  <div class="form-group">
    <label for="Textarea">Log Body</label>
    <textarea class="form-control" id="body" rows="3"></textarea>
  </div>
  <div class="form-group">
    <label for="timestamp">Timestamp</label>
    <input type="text" class="form-control" id="timestamp" placeholder="Timestamp" value="${logObject.timestamp}" required>
  </div>
    <div class="form-group">
    <label for="timezone">Timezone</label>
    <input type="text" class="form-control" id="timezone" placeholder="Timezone" value="${logObject.timezone}" required>
  </div>
  </div>
    <div class="form-check mb-2">
    <input class="form-check-input" type="checkbox" ${logObject.shared && 'checked'} id="log-private">
    <label class="form-check-label" for="private">Private</label>
  </div>
  <button type="submit" id="update-log--${logObject.firebaseKey}" class="btn btn-success">Update Log</button>
</form>`;
};

export default editLogForm;
