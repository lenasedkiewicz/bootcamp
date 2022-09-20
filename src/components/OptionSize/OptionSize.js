import styles from "./OptionSize.module.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const OptionSize = (props) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size, index) => (
          <li key={index}>
            <Button
              onClick={() => {
                props.action(size.name);
                props.actionprice(size.additionalPrice);
              }}
              className={size.name === props.price ? styles.active : null}
            >
              {size.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
};

export default OptionSize;
