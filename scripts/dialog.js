const dialog = document.getElementById('dialog-floppy');
const saveButton = document.querySelector('.save-button');
const okButton = document.querySelector('.ok-button');

saveButton.addEventListener('click', function () {
  dialog.showModal();
});

okButton.addEventListener('click', function () {
  dialog.close();
});
