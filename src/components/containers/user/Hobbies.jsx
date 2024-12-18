import PropTypes from "prop-types";
import {useState} from "react";

Hobbies.propTypes = {
    state: PropTypes.element.isRequired
}

function Hobbies({state: [hobbies, setHobbies]}) {

    const [hobbyInputValue, setHobbyInputValue] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        if (hobbyInputValue.trim() === "") {
            alert("Le champ est vide !");
            return;
        }
        setHobbies([...hobbies, hobbyInputValue]);
        setHobbyInputValue("");
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>Ajouter un hobby</label>
                <input type="text" value={hobbyInputValue} onChange={e => setHobbyInputValue(e.target.value)}/>
                <button type={"submit"}>Ajouter</button>
            </form>
            <ul>
                {hobbies && hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    );
}

export default Hobbies;