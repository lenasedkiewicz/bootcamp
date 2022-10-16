import shortid from "shortid";

const BooksList = ({ books }) => {

    const removeBook = (bookId) => {
        setBooks(books.filter((book) => book.id !== bookId));
      };
    
      const addBook = (newBook) => {
        setBooks([
          ...books,
          { id: shortid(), title: newBook.title, author: newBook.author },
        ]);
      };
    return (
        <ul>
            {books.map(book => <li key={book.id}>{book.title} by {book.author} <button onClick={() => removeBook(book.id)}>Remove</button></li>)}
        </ul>
    )
};

export default BooksList;