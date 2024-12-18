import Header from "./components/containers/header/Header.jsx";
import Footer from "./components/containers/footer/Footer.jsx";
import User from "./components/containers/user/User.jsx";

function App() {
    return (
        <>
            <Header/>
            <main>
                <section>
                    <User firstname="Ludovic"
                          lastname="Anselin"
                          age={23}
                          hobbies={["Sport", "Sleep", "Read"]}/>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
