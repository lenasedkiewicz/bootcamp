import styles from "./Product.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import { useState } from "react";
import ProductImage from "../ProductImage/ProductImage";


const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentSizePrice, setCurrentSizePrice] = useState(
    props.sizes[0].additionalPrice
  );

  function getTotalPrice() {
    return props.basePrice + currentSizePrice;
  }

  const shoppingSummary = {
    name: props.title,
    color: currentColor,
    size: currentSize,
    price: getTotalPrice(),
  }

  const prepareColorClassName = (color) => {
    return styles[
      "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };
  return (
    <article className={styles.product}>
      <ProductImage name={props.name} children={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>
            Price: {getTotalPrice()}$
          </span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size) => (
                <li key={size.name}>
                  <button
                    type="button"
                    onClick={() => {setCurrentSize(size.name); setCurrentSizePrice(size.additionalPrice)}}
                    className={size.name === currentSize ? styles.active : null}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((item) => (
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
          <Button onClick={(e) => {e.preventDefault(); console.log('Summary: ', shoppingSummary)}} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;
