const myLibrary = [];

const formSubmitButton = document.querySelector("#add-book");
const main = document.querySelector(".main");
const dialog = document.querySelector("dialog");
const modalOpen = document.querySelector(".show-modal");
const modalClose = document.querySelector(".close-modal");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

modalOpen.addEventListener("click", () => {
  title.value = "";
  author.value = "";
  pages.value = "";
  dialog.showModal();
});

modalClose.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

Book.prototype.createBookCard = function () {
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = `${this.title}`;
  const bookAuthor = document.createElement("p");
  const bookPages = document.createElement("p");
  const haveRead = document.createElement("p");
  const buttons = document.createElement("div");
  const deleteButton = document.createElement("button");
  const readButton = document.createElement("button");
  buttons.classList.add("buttons");
  deleteButton.textContent = "Delete";
  readButton.textContent = `${this.read ? "Not Read" : "Read"}`;
  bookAuthor.textContent = `Author: ${this.author}`;
  bookPages.textContent = `Page: ${this.pages}`;
  haveRead.textContent = `Read: ${this.read ? "Read" : "Not read yet"}`;
  const bookCard = document.createElement("div");
  buttons.appendChild(deleteButton);
  buttons.appendChild(readButton);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(haveRead);
  bookCard.appendChild(buttons);
  bookCard.setAttribute("data-id", this.id);
  bookCard.classList.add("book");
  deleteButton.addEventListener("click", (e) => {
    e.preventDefault();
    myLibrary.splice(
      myLibrary.findIndex((book) => book.id === bookCard.dataset.id),
      1
    );
    displayLibrary(myLibrary);
  });
  readButton.addEventListener("click", (e) => {
    e.preventDefault();
    this.read = !this.read;
    haveRead.textContent = `Read: ${this.read ? "Read" : "Not read yet"}`;
    readButton.textContent = `${this.read ? "Not read" : "Read"}`;
  });
  return bookCard;
};

function displayLibrary(arr) {
  main.removeChild(document.querySelector(".library"));
  const library = document.createElement("section");
  library.classList.add("library");

  arr.forEach((book) => {
    let bookCard = book.createBookCard();
    library.appendChild(bookCard);
  });
  main.appendChild(library);
}

function addBookToLibrary(title, author, pages, read, arr) {
  const newBook = new Book(title, author, pages, read);
  arr.push(newBook);
}

function createBook(e) {
  e.preventDefault();
  const titleInput = title.value;
  const authorInput = author.value;
  const pagesInput = pages.value;
  const readInput = document.querySelector("#read").checked;
  addBookToLibrary(titleInput, authorInput, pagesInput, readInput, myLibrary);
  displayLibrary(myLibrary);
  dialog.close();
}

formSubmitButton.addEventListener("click", createBook);
