import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";

import "./styles.css";

function App() {
    return <div>
        <Header />
        <Note />
        <Footer/>
    </div>;
}

export default App;