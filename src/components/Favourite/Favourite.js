import styles from "./Favourite.module.scss";
import Container from "../Container/Container";
import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";
import { getFavouriteCard } from "../../redux/cardsReducer";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favourite = () => {
  const favouriteCards = useSelector(getFavouriteCard);
  if (favouriteCards.length === 0) {
    return (
      <>
        <NavBar />
        <Container>
          <PageTitle>You don't have any favourite cards.</PageTitle>
        </Container>
      </>
    );
  }
  return (
    <>
      <NavBar />
      <Container>
        <PageTitle>Favourite</PageTitle>
        <div className={styles.column}>
          <ul className={styles.cards}>
            {favouriteCards.map((favouriteCard) => (
              <Card
                key={favouriteCard.id}
                cardId={favouriteCard.id}
                title={favouriteCard.title}
                isFavourite={favouriteCard.isFavourite}
              />
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Favourite;
