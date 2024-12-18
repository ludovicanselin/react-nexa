import Header from "./components/containers/header/Header.jsx";
import Footer from "./components/containers/footer/Footer.jsx";
import Routine from "./components/containers/routine/Routine.jsx";

function App() {
    return (
        <>
            <Header/>
            <main>
                <section>
                    <Routine />
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
