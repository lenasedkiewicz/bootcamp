import styles from "./ListForm.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listsReducer";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const ListForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle("");
    setDescription("");
  };
  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      Title:
      <div className={styles.padding}>
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      Description:{" "}
      <div className={styles.padding}>
        <TextInput
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.padding}>
        <Button>Add list</Button>
      </div>
    </form>
  );
};
export default ListForm;
