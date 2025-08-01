const myLibrary = [];

const library = document.querySelector(".library");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read, arr) {
  const newBook = new Book(title, author, pages, read);
  arr.push(newBook);
}

addBookToLibrary("hobbit", "tolkien", 295, true, myLibrary);
addBookToLibrary("hobbit", "tolkien", 295, true, myLibrary);
addBookToLibrary("hobbit", "tolkien", 295, true, myLibrary);
addBookToLibrary("hobbit", "tolkien", 295, true, myLibrary);
addBookToLibrary("hobbit", "tolkien", 295, true, myLibrary);
addBookToLibrary("hobbit", "tolkien", 295, true, myLibrary);
addBookToLibrary("hobbit", "tolkien", 295, true, myLibrary);
addBookToLibrary("hobbit", "tolkien", 295, true, myLibrary);
addBookToLibrary("hobbit", "tolkien", 295, true, myLibrary);

function displayLibrary(arr) {
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
    bookCard.classList.add("book");
    library.appendChild(bookCard);
  });
}

displayLibrary(myLibrary);
