const addButton = document.querySelector('.add-button');
const closeFormButton = document.querySelector('.close-button');
const inputForm = document.querySelector('.input-parent');

function addButtonClick() {
  inputForm.classList.remove('none');
}

function closeFormClick() {
    inputForm.classList.add('none');
}

addButton.addEventListener('click', addButtonClick);
closeFormButton.addEventListener('click', closeFormClick);
