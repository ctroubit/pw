import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
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
        <Navbar></Navbar>
        </>
        
    );
}

export default App;
