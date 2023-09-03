import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteManager from "./components/NoteManager";
import notes from "./notes";
import "./styles.css";

function App() {
    return <div>
        <Header />
        <NoteManager notes={notes}/>
        <Footer/>
    </div>;
}

export default App;