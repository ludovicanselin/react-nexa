import PropTypes from 'prop-types';
import LastName from "./LastName.jsx";
import FirstName from "./FirstName.jsx";

FullName.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

function FullName({firstname, lastname, age}) {
    return (
        <>
            <FirstName value={firstname} age={age} /> <LastName value={lastname} />
        </>
    );
}

export default FullName;