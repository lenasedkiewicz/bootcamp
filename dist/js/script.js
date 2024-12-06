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
      bookImage: "book__image",
      rating: ".book__rating__fill",
    },
    templateOf: {
      bookTemplate: "#template-book",
    },
    class: {
      favorite: "favorite",
      hidden: "hidden",
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
      thisBook.filterBooks();
      thisBook.determineRatingBgc();
    }

    initData() {
      const thisBook = this;
      thisBook.data = dataSource.books;

      for (const book of dataSource.books) {
        const thisBook = this;
        book.ratingBgc = thisBook.determineRatingBgc(book.rating);
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
    }

    getElements() {
      const thisBook = this;

      thisBook.list = document.querySelector(select.books.bookList);
      thisBook.image = document.querySelectorAll(select.books.bookImage);
      thisBook.filters = document.querySelector(select.form);
      thisBook.booksPanel = document.querySelector(select.books.booksPanel);
    }

    initActions() {
      const thisBook = this;

      thisBook.booksPanel.addEventListener("click", function (e) {
        e.preventDefault();
      });

      thisBook.booksPanel.addEventListener("dblclick", function (e) {
        e.preventDefault();

        const book = e.target.offsetParent;
        if (book.classList.contains(select.books.bookImage)) {
          book.classList.toggle(select.class.favorite);
          const bookImageId = book.getAttribute(select.books.bookImageId);
          if (!favoriteBooks.includes(bookImageId)) {
            favoriteBooks.push(bookImageId);
          } else {
            const indexId = favoriteBooks.indexOf(bookImageId);
            favoriteBooks.splice(indexId, 1);
          }
        }
      });

      thisBook.filters.addEventListener("click", function (e) {
        const filter = e.target;
        if (
          filter.getAttribute("type") === "checkbox" &&
          filter.getAttribute("name") === "filter"
        ) {
          if (filter.checked) {
            filters.push(filter.value);
            thisBook.filterBooks();
          } else if (!filter.checked) {
            const filterId = filters.indexOf(filter.value);
            filters.splice(filterId, 1);
            thisBook.filterBooks();
          }
        }
      });
    }

    filterBooks() {
      const books = dataSource.books;
      const bookId = [];

      for (let book of books) {
        for (const filter of filters) {
          if (!book.details[filter]) {
            bookId.push(book.id);
          }
        }

        if (bookId.includes(book.id)) {
          const bookImg = document.querySelector('[data-id="' + book.id + '"]');
          bookImg.classList.add(select.class.hidden);
        } else if (!bookId.includes(book.id)) {
          const bookImg = document.querySelector('[data-id="' + book.id + '"]');
          bookImg.classList.remove(select.class.hidden);
        }
      }
    }

    determineRatingBgc(rating) {
      if (rating < 6) {
        return "linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%";
      } else if (rating > 6 && rating <= 8) {
        return "linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)";
      } else if (rating > 8 && rating <= 9) {
        return "linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)";
      } else if (rating > 9) {
        return "linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)";
      }
    }
  }

  const app = new BooksList();
}
