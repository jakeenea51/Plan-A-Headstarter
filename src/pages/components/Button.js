import PropTypes from "prop-types";

const Button = ({ className, onClick, text }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {" "}
        {text}{" "}
      </button>
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProp = {
  text: "Default Button",
};

export default Button;
