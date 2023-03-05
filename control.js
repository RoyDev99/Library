const bookTable = document.getElementById('book-table');
const newBookBtn = document.getElementById('new-book');
const bookForm = document.getElementById('book-form');
const cancelBtn = document.getElementById('cancel-button');

// Define a Book class
class Book {
  constructor(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
  }
}

// Define an array to hold Book objects
let library = [];

// Function to add a Book object to the library array
function addBookToLibrary(book) {
  library.push(book);
}

// Function to remove all rows from the book table
function clearTable() {
  while (bookTable.rows.length > 1) {
    bookTable.deleteRow(1);
  }
}

// Function to display all books in the library
function displayBooks() {
  // Remove all rows from the table except the header
  clearTable();

  // Loop through the library array and add each book to the table
  library.forEach((book, index) => {
    const row = bookTable.insertRow();

    const titleCell = row.insertCell();
    titleCell.textContent = book.title;

    const authorCell = row.insertCell();
    authorCell.textContent = book.author;

    const numPagesCell = row.insertCell();
    numPagesCell.textContent = book.numPages;

    const readCell = row.insertCell();
    readCell.textContent = book.read ? 'Yes' : 'No';

    const deleteCell = row.insertCell();
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      library.splice(index, 1);
      displayBooks();
    });
    deleteCell.appendChild(deleteBtn);
  });
}

// Event listener for the "New Book" button
newBookBtn.addEventListener('click', () => {
  bookForm.style.display = 'block';
});

// Event listener for the "Cancel" button
cancelBtn.addEventListener('click', () => {
  bookForm.style.display = 'none';
});

// Event listener for the form submit button
bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const numPages = document.getElementById('numberPages').value;
  const read = document.getElementById('read').checked;

  const book = new Book(title, author, numPages, read);
  addBookToLibrary(book);
  displayBooks();
  bookForm.style.display = 'none';
});
window.onbeforeunload = function() {
    window.resetForm();
  };
  
function resetForm() {
  document.getElementById("book-form").reset();
}