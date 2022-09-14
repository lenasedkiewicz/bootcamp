import styles from "./Timer.module.scss";
import { useState } from "react";
import Button from "../button/Button";

const Timer = () => {
  const [clock, setClock] = useState("0");
  // clock.format('HH:mm:ss.ms');
  return (
    <div className={styles.timer}>
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </div>
  );
};
export default Timer;
