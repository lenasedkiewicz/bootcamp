import styles from "./Container.module.scss";
import Timer from "../timer/Timer";

const Container = () => {
  return (
    <div className={styles.container}>
      <Timer />
    </div>
  );
};

export default Container;
