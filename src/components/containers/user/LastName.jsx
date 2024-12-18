import PropTypes from "prop-types";

LastName.propTypes = {
    value: PropTypes.string.isRequired
}

function LastName({value}) {
    return (
        <>{value}</>
    );
}

export default LastName;