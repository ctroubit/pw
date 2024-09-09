import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/Home";


function App() {
    return (
        <>
        <Header/>
        <h1 className="bruh">pick your favourite!</h1>
        <Navbar></Navbar>
        <About></About>
        </>
        
    );
}

export default App;
