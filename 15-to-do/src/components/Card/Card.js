import styles from "./Card.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCardFavourite } from "../../redux/cardsReducer";
import { removeCard } from "../../redux/cardsReducer";

const Card = (props) => {
  const cardId = props.cardId;
  const [favouriteValue, setFavouriteValue] = useState(props.isFavourite);

  const dispatch = useDispatch();

  const toggleFavourite = (e) => {
    e.preventDefault();
    setFavouriteValue(!favouriteValue);
    dispatch(toggleCardFavourite(cardId));
  };

  const deleteCard = (e) => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}{" "}
      <div className={styles.buttons}>
        <button
          onClick={toggleFavourite}
          className={clsx(styles.button, props.isFavourite && styles.isActive)}
        >
          <i className={"fa fa-star"} />
        </button>
        <button onClick={deleteCard} className={styles.button}>
          <i className={"fa fa-trash"} />
        </button>
      </div>
    </li>
  );
};

export default Card;
