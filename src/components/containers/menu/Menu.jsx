import {useState} from "react";
import Button from "../../ui/buttons/Button.jsx";

function Menu() {
    const [hidden, setHidden] = useState(true);

    return (
        <>
            <Button content={hidden ? "Show" : "Hide"} onClick={() => setHidden(!hidden)} />
            {!hidden && <menu>
                <h1>Menu Secret</h1>
                <ul>
                    <li>nourrir le chien</li>
                    <li>faire mes devoirs</li>
                    <li>essayer des trucs en React</li>
                </ul>
            </menu>}
        </>
    );
}

export default Menu;