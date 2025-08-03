const myLibrary = [];

const formSubmitButton = document.querySelector("#add-book");
const main = document.querySelector(".main");
const dialog = document.querySelector("dialog");
const modalOpen = document.querySelector(".show-modal");
const modalClose = document.querySelector(".close-modal");

modalOpen.addEventListener("click", () => {
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

function displayLibrary(arr) {
  main.removeChild(document.querySelector(".library"));
  const library = document.createElement("section");
  library.classList.add("library");

  arr.forEach((book) => {
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = `${book.title}`;
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const haveRead = document.createElement("p");
    const buttons = document.createElement("div");
    const deleteButton = document.createElement("button");
    const readButton = document.createElement("button");
    buttons.classList.add("buttons");
    deleteButton.textContent = "Delete";
    readButton.textContent = `${book.read ? "Not Read" : "Read"}`;
    bookAuthor.textContent = `Author: ${book.author}`;
    bookPages.textContent = `Page: ${book.pages}`;
    haveRead.textContent = `Read: ${book.read ? "Read" : "Not read yet"}`;
    const bookCard = document.createElement("div");
    buttons.appendChild(deleteButton);
    buttons.appendChild(readButton);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(haveRead);
    bookCard.appendChild(buttons);
    bookCard.setAttribute("data-id", book.id);
    bookCard.classList.add("book");
    library.appendChild(bookCard);
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
      book.read = !book.read;
      haveRead.textContent = `Read: ${book.read ? "Read" : "Not read yet"}`;
      readButton.textContent = `${book.read ? "Not read" : "Read"}`;
    });
  });
  main.appendChild(library);
}

function addBookToLibrary(title, author, pages, read, arr) {
  const newBook = new Book(title, author, pages, read);
  arr.push(newBook);
}

function createBook(e) {
  e.preventDefault();
  const titleInput = document.querySelector("#title").value;
  const authorInput = document.querySelector("#author").value;
  const pagesInput = document.querySelector("#pages").value;
  const readInput = document.querySelector("#read").checked;
  addBookToLibrary(titleInput, authorInput, pagesInput, readInput, myLibrary);
  displayLibrary(myLibrary);
  dialog.close();
}

formSubmitButton.addEventListener("click", createBook);
