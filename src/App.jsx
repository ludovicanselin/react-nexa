import Header from "./components/containers/header/Header.jsx";
import Footer from "./components/containers/footer/Footer.jsx";
import './App.css'
import User from "./components/User.jsx";
import LastName from "./components/LastName.jsx";
import FirstName from "./components/FirstName.jsx";

function App() {
    return (
        <>
        <Header/>
        <main>
            <section>
                <User fullname={{
                    firstName: <FirstName value={"Ludovic"}/>,
                    lastName: <LastName value={"Anselin"}/>
                }}
                hobbies={["Basket", "Football", "Reading"]}/>
        </section>
        </main>
    <Footer/>
</>
)
}

export default App
