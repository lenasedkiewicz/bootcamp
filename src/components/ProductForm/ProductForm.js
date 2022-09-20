import styles from "./ProductForm.module.scss";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";
import OptionSize from "../OptionSize/OptionSize";

const ProductForm = (props) => {

  const summary = (e) => {
    e.preventDefault();
    console.log("Summary: ", props.shoppingSummary);
    }

  return (
    <form>
      <OptionColor
        colors={props.colors}
        action={props.actionColor}
        currentColor={props.currentColor}
      />
      <OptionSize
        size={props.size}
        action={props.actionSize}
        currentSize={props.currentSize}
        price={props.price}
        actionprice={props.actionPrice}
        sizes={props.sizes}
      />
      <Button type={"submit"} onClick={summary} className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

export default ProductForm;
