import styles from "./Hero.module.scss";
import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";

const Hero = () => {
  return (
    <>
      <NavBar />
      <div className={styles.hero}>
        <PageTitle>My Bucket List</PageTitle>
        <p className={styles.subtitle}>
          A simple to-do app, with lists, columns and cards
        </p>
      </div>
    </>
  );
};

export default Hero;
