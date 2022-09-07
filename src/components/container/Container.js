import Button from "../button/Button";
import styles from "./Container.module.scss";

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
};

export default Container;
