import PropTypes from "prop-types";

Button.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

function Button({content, onClick}) {
    return (
        <button onClick={onClick}>
            {content}
        </button>
    );
}

export default Button;