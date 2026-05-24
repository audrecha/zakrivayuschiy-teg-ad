const dialog = document.getElementById('dialog-floppy');
const saveButton = document.querySelector('.dialog-button');
const okButton = document.querySelector('.ok__dialog-button button');

if (saveButton) {
  saveButton.addEventListener('click', function () {
    dialog.showModal();
  });
}

if (okButton) {
  okButton.addEventListener('click', function () {
    dialog.close();
  });
}
