import BooksList from "./components/BooksList/BooksList";
import BookForm from "./components/BookForm/BookForm";
import { updateBooks } from "./redux/booksRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const fetchBooks = () => {
    fetch("http://localhost:3131/api/books")
      .then((res) => res.json())
      .then((books) => dispatch(updateBooks(books)));
  };

  useEffect(fetchBooks, [dispatch]);
  return (
    <div>
      <h1>Books App</h1>
      <BooksList />
      <BookForm />
    </div>
  );
};

export default App;
