import Hobbies from "./components/containers/user/Hobbies.jsx";
import {useState} from "react";

function App() {

    const hobbiesState = useState([])

    return (
        <>
            <main>
                <section>
                    <Hobbies state={hobbiesState} />
                </section>
            </main>
        </>
    )
}

export default App
