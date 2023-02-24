const bookLibrary = [];
const addButton = document.querySelector('.add-button');
const closeFormButton = document.querySelector('.close-button');
const inputForm = document.querySelector('.input-parent');
const library = document.querySelector('.library');
const bookName = document.querySelector('#book-name');
const bookAuthor = document.querySelector('#book-author');
const bookRead = document.querySelector('#read');
const submitButton = document.querySelector('.submit-button');

class Book {
  constructor(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
  }
}

function bookAppending() {
  const newBook = document.createElement('div');
  for (let i = 0; i < bookLibrary.length; i++) {
    newBook.classList.add(`${i}`);
    newBook.classList.remove(`${i - 1}`);
  }
  newBook.classList.add('book');
  newBook.innerHTML += '<button class="close-button1">X</button>';
  newBook.append(`Book name: ${bookLibrary[bookLibrary.length - 1].name}`);
  newBook.innerHTML += '<br>';
  newBook.append(`Book author: ${bookLibrary[bookLibrary.length - 1].author}`);
  newBook.innerHTML += '<br>';
  newBook.append('Have I read this book?:');
  if (bookLibrary[bookLibrary.length - 1].read === true) {
    newBook.innerHTML += `<span>${bookLibrary[bookLibrary.length - 1].read}</span>`;
    library.append(newBook);
  } else {
    newBook.innerHTML += `<span class="read-span">${bookLibrary[bookLibrary.length - 1].read}</span>`;
    newBook.innerHTML += '<span class="question-span">Did you finish reading this book? <input type="checkbox" name="finish-reading" id="finish-reading"></span>';
    library.append(newBook);
    const finishedReading = document.querySelectorAll('#finish-reading');
    const questionSpan = document.querySelectorAll('.question-span');
    for (let i = 0; i < finishedReading.length; i++) {
      finishedReading[i].addEventListener('click', () => {
        const readSpan = document.querySelectorAll('.read-span');
        if (readSpan[i].innerText = 'false') {
          readSpan[i].innerText = 'true';
          finishedReading[i].style.display = 'none';
          questionSpan[i].style.display = 'none';
        }
      });
    }
  }
  const removeButton = document.querySelectorAll('.close-button1');
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener('click', () => {
      removeButton[i].parentElement.style.display = 'none';
    });
  }
}

function addButtonClick() {
  inputForm.classList.remove('none');
  library.style.display = 'none';
}

function closeFormClick() {
  inputForm.classList.add('none');
  library.style.display = 'grid';
}

function submitFormClick(e) {
  e.preventDefault();
  const bookToAdd = new Book(bookName.value, bookAuthor.value, bookRead.checked);
  bookLibrary.push(bookToAdd);
  inputForm.classList.add('none');
  library.style.display = 'grid';
  bookAppending();
}

submitButton.addEventListener('click', submitFormClick);
addButton.addEventListener('click', addButtonClick);
closeFormButton.addEventListener('click', closeFormClick);
