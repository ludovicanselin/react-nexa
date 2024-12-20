import PropTypes from "prop-types";
import FullName from "./FullName.jsx";
import Hobbies from "./Hobbies.jsx";

User.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hobbies: PropTypes.array.isRequired,
}

function User({firstname, lastname, age, hobbies}) {
    return (
        <>
            <FullName firstname={firstname} lastname={lastname} age={age} />
            <Hobbies state={hobbies} />
        </>
    );
}

export default User;