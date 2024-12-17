import Header from "./components/containers/header/Header.jsx";
import Footer from "./components/containers/footer/Footer.jsx";
import User from "./components/containers/user/User.jsx";
import LastName from "./components/containers/user/LastName.jsx";
import FirstName from "./components/containers/user/FirstName.jsx";
import Hobbies from "./components/containers/user/Hobbies.jsx";
import Button from "./components/ui/buttons/Button.jsx";
import './App.css'

function App() {
    return (
        <>
            <Header/>
            <main>
                <section>
                    <User>
                        <FirstName value="Ludovic"/>
                        <LastName value="Anselin"/>
                        <br/>
                        <Hobbies value={[
                            "Sport",
                            "Eat",
                            "Sleep"
                        ]}/>
                    </User>
                    <Button content={"Click me"}
                            style={{
                                backgroundColor: "white",
                                color: "black",
                            }}/>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
