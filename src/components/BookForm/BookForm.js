import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookRequest } from "../../redux/booksRedux";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookRequest({ title, author }));
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      Title:{" "}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      Author:{" "}
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button>Add book</button>
    </form>
  );
};

export default BookForm;
