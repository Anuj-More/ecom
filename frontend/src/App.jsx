import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/home-page/HomePage";

function App() {
    return (
        <>
            <Header />
            <HomePage />
        </>
    );
}

export default App;
