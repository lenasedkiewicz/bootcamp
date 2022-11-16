/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  ("use strict");

  const select = {
    books: {
      booksPanel: ".books-panel",
      bookList: ".books-list",
      bookImageId: "data-id",
      cardOfBook: ".book",
      bookImage: ".book__image",
    },
    templateOf: {
      bookTemplate: "#template-book",
    },
  };

  const templates = {
    bookCard: Handlebars.compile(
      document.querySelector(select.templateOf.bookTemplate).innerHTML
    ),
  };

  const renderBookList = function () {
    for (const book of dataSource.books) {
      //generate HTML based on Handlebars template
      const generatedHTML = templates.bookCard(book);

      //create book object using utils
      const singleBook = utils.createDOMFromHTML(generatedHTML);

      //find books-list class in DOM
      const listOfBooks = document.querySelector(select.books.bookList);

      //add book to list
      listOfBooks.appendChild(singleBook);
    }
  };
  renderBookList();

  const initActionFavoriteBooks = function () {
    const books = document.querySelectorAll(select.books.bookImage);

    const favoriteBooks = [];

    for (const book of books) {
      book.addEventListener("dblclick", function (event) {
        event.preventDefault();
        const bookId = book.getAttribute(select.books.bookImageId);
        let favoriteIndex = favoriteBooks.indexOf(bookId);

        if(favoriteIndex == -1){
          book.classList.add('favorite');

          favoriteBooks.push(bookId);
        } else {
          book.classList.remove('favorite');
          favoriteBooks.splice(favoriteIndex, 1);
        }
      });
    }
  };
  initActionFavoriteBooks();
}
