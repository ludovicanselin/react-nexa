import Header from "./components/containers/header/Header.jsx";
import Footer from "./components/containers/footer/Footer.jsx";
import Player from "./components/containers/player/Player.jsx";

function App() {
    return (
        <>
            <Header/>
            <main>
                <section>
                    <Player />
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default App
