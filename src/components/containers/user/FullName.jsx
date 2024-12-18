import PropTypes from 'prop-types';
import LastName from "./LastName.jsx";
import FirstName from "./FirstName.jsx";

FullName.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
}

function FullName({firstname, lastname}) {
    return (
        <>
            <LastName value={lastname} /> <FirstName value={firstname} />
        </>
    );
}

export default FullName;