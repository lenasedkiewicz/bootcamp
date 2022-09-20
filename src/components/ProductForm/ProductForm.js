import OptionColor from "../OptionColor/OptionColor";

const ProductForm = (props) => {
    console.log(this.props.children);
    return (
        <div>
            <OptionColor>{props.children}</OptionColor>
        </div>
    )
}

export default ProductForm;