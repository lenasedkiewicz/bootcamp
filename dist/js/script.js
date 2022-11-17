/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  ("use strict");

  const select = {
    form: ".filters",
    inputCheckbox: 'input[type="checkbox"]',
    inputName: 'input[name="filter"]',
    books: {
      booksPanel: ".books-panel",
      bookList: ".books-list",
      bookImageId: "data-id",
      cardOfBook: ".book",
      bookImage: ".book__image",
      rating: ".book__rating__fill",
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

  const favoriteBooks = [];
  const filters = [];

  class BooksList {
    constructor(id) {
      const thisBook = this;

      thisBook.id = id;
      thisBook.initData();
      thisBook.getElements();
      thisBook.initActions();
    }

    initData() {
      const thisBook = this;
      thisBook.data = dataSource.books;

      for (const book of dataSource.books) {
        book.ratingBgc = determineRatingBgc(book.rating);
        book.ratingWidth = book.rating * 10;
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

    getElements() {
      const thisBook = this;

      thisBook.list = document.querySelector(select.books.bookList);
      thisBook.image = document.querySelectorAll(select.books.bookImage);
      thisBook.filters = document.querySelector(select.form.filters);
      thisBook.booksPanel = document.querySelector(select.books.booksPanel);
    }

    initActions() {
      const thisBook = this;

      thisBook.list.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
  }

  const determineRatingBgc = function (rating) {
    if (rating < 6) {
      return "linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)";
    } else if (rating > 6 && rating <= 8) {
      return "linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)";
    } else if (rating > 8 && rating <= 9) {
      return "linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)";
    } else if (rating > 9) {
      return "linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)";
    }
  };


  const initActionFavoriteBooks = function () {
    const booksContainer = document.querySelector(select.books.booksPanel);

    booksContainer.addEventListener("dblclick", function (event) {
      event.preventDefault();

      const bookId = event.target.offsetParent.getAttribute(
        select.books.bookImageId
      );
      const favoriteIndex = favoriteBooks.indexOf(bookId);

      if (
        !favoriteBooks.includes(bookId) &&
        event.target.offsetParent.classList.contains("book__image")
      ) {
        event.target.offsetParent.classList.add("favorite");
        favoriteBooks.push(bookId);
      } else if (favoriteBooks.includes(bookId)) {
        event.target.offsetParent.classList.remove("favorite");
        favoriteBooks.splice(favoriteIndex, 1);
      }
    });
  };
  initActionFavoriteBooks();

  const filtering = function () {
    const filteringForm = document.querySelector(select.form);

    filteringForm.addEventListener("click", function (event) {
      if (event.target.type == "checkbox") {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
          filters.push(value);
        } else {
          filters.splice(filters.indexOf(value), 1);
        }
      }
      filteringBooks();
    });

    const filteringBooks = function () {
      for (let book of dataSource.books) {
        const bookId = book.id;
        const selected = document.querySelector(
          select.books.bookImage + '[data-id = "' + bookId + '"]'
        );
        let isActive = true;

        for (let filter of filters) {
          if (!book.details[filter]) {
            isActive = false;
            break;
          }
        }
        if (!isActive) {
          selected.classList.add("hidden");
        } else {
          selected.classList.remove("hidden");
        }
      }
    };
  };
  filtering();

  const app = new BooksList();
}
