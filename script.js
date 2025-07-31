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
addBookToLibrary(
  "ssssssssssssssssssssssssssssssssssssssssssssssssss",
  "tolkien",
  295,
  true,
  myLibrary
);
addBookToLibrary("hobbit", "tolkien", 295, true, myLibrary);

function displayLibrary(arr) {
  arr.forEach((book) => {
    const bookTitle = document.createElement("h2");
    bookTitle.textContent = `${book.title}`;
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const haveRead = document.createElement("p");
    bookAuthor.textContent = `Written by ${book.author}`;
    bookPages.textContent = `${book.pages} pages`;
    haveRead.textContent = `${book.read ? "Read" : "Not read yet"}`;
    const bookCard = document.createElement("div");
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(haveRead);
    bookCard.classList.add("book");
    library.appendChild(bookCard);
  });
}

displayLibrary(myLibrary);
