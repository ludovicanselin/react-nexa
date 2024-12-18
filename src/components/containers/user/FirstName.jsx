import PropTypes from "prop-types";

FirstName.propTypes = {
    value: PropTypes.string.isRequired
}

function FirstName({value}) {
    return (
        <>{value}</>
    );
}

export default FirstName;