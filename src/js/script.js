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
    const booksContainer = document.querySelector(select.books.booksPanel);

    const favoriteBooks = [];

    booksContainer.addEventListener('dblclick', function(event){
      event.preventDefault();

      const bookId = event.target.offsetParent.getAttribute(select.books.bookImageId);
      const favoriteIndex = favoriteBooks.indexOf(bookId);

      if(!favoriteBooks.includes(bookId) && event.target.offsetParent.classList.contains('book__image')){

        event.target.offsetParent.classList.add('favorite');
        favoriteBooks.push(bookId);

      } else if(favoriteBooks.includes(bookId)){

        event.target.offsetParent.classList.remove('favorite');
        favoriteBooks.splice(favoriteIndex, 1);
      };
    });
  };
  initActionFavoriteBooks();
}
