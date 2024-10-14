import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";

import { FaRegCopyright } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [theme, setTheme] = useState("spotify"); // Manages the global theme state

    // Functions to toggle themes
    const setAppleTheme = () => setTheme("apple");
    const setSpotifyTheme = () => setTheme("spotify");

    return (
        <Router>
            <div className={`App ${theme}-theme`}> {/* Apply theme class to entire page */}
                {/* Pass theme and toggle functions as props */}
                <Header setAppleTheme={setAppleTheme} setSpotifyTheme={setSpotifyTheme} />
                <h1 className="bruh">Pick your favourite!</h1>
                {/* Pass the theme as a prop to the Navbar */}
                <Navbar className="navbar" theme={theme} />
                <div className="hello">
                <Routes>
                    
                    <Route path="/" element={<Home theme={theme} />} />
                    <Route path="/about" element={<About theme={theme} />} />
                </Routes>
                </div>
                
            </div>
            <footer className="copy"><FaRegCopyright /> 2024 Cristian Troubitsin</footer>
        </Router>
    );
}

export default App;
