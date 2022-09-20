import styles from "./OptionColor.module.scss"
import { useState } from "react";
import Button from "../Button/Button";
import clsx from "clsx";
import PropTypes from "prop-types";

const OptionColor = (props) => {
    const [currentColor, setCurrentColor] = useState(props.colors[0]);
    const prepareColorClassName = (color) => {
        return styles[
          "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
        ];
      };
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((item) => (
                <li key={item}>
                  <Button
                    onClick={() => setCurrentColor(item)}
                    className={clsx(
                      prepareColorClassName(item),
                      item === currentColor && styles.active
                    )}
                  />
                </li>
              ))}
            </ul>
        </div>
    )
}

OptionColor.propTypes = {
    colors: PropTypes.array.isRequired,
  };

export default OptionColor;