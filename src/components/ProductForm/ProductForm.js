import OptionColor from "../OptionColor/OptionColor";

const ProductForm = (props) => {
    return (
        <div>
            <OptionColor colors={props.colors} action={props.action} currentColor={props.currentColor} />
        </div>
    )
}

export default ProductForm;