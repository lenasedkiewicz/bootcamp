import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from "prop-types";

const Button = (props) => {
    return (<button type={props.type} onClick={props.onClick} className={clsx(styles.button, props.className)}>{props.children}</button>);
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default Button;