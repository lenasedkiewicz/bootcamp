import BooksList from "./components/BooksList/BooksList";
import BookForm from "./components/BookForm/BookForm";
import { useState } from "react";

const App = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Shogun", author: "James Clavell" },
    { id: 2, title: "the Witcher", author: "Andrzej Sapkowski" },
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId))
  };

  return (
    <div>
      <h1>Books App</h1>
      <BooksList books={books} removeBook={removeBook} />
      <BookForm />
    </div>
  );
};

export default App;
