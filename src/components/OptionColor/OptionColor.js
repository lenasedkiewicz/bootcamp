import styles from "./OptionColor.module.scss"
import clsx from "clsx";
import { useState } from "react";
import PropTypes from "prop-types";
import productsData from "../../data/products";

const OptionColor = (props) => {
    const [products] = useState(productsData);
    const [currentColor, setCurrentColor] = useState(products.colors[0]);
    const prepareColorClassName = (color) => {
        return styles[
          "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
        ];
      };

    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {products.colors.map((item) => (
                <li key={item}>
                  <button
                    type="button"
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