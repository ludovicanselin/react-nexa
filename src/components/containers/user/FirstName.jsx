import PropTypes from "prop-types";

FirstName.propTypes = {
    value: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}

function FirstName({value, age}) {
    return (
        <>
            Age : {age} | {value}
        </>
    );
}

export default FirstName;