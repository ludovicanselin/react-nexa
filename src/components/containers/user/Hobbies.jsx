import PropTypes from "prop-types";

Hobbies.propTypes = {
    value: PropTypes.array.isRequired
}

function Hobbies({value}) {
    return (
        <ul>
            {value && value.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
    );
}

export default Hobbies;