import styles from "./ProductForm.module.scss";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";

const ProductForm = (props) => {

  const summary = (e) => {
    e.preventDefault();
    console.log("Summary: ", props.shoppingSummary);
    }

  return (
    <form>
      <OptionColor
        colors={props.colors}
        action={props.action}
        currentColor={props.currentColor}
      />
      <Button type={"submit"} onClick={summary} className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

export default ProductForm;
