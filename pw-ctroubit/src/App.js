import React, { useState, useEffect} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";

import { FaRegCopyright } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    
    const [theme, setTheme] = useState("spotify");

    const setAppleTheme = () => setTheme("apple");  // Declare only once here
    const setSpotifyTheme = () => setTheme("spotify");

    useEffect(() => {
        // Remove previous theme class if any
        document.body.classList.remove('apple-theme', 'spotify-theme');
    
        // Add the current theme class to the body element
        document.body.classList.add(`${theme}-theme`);
      }, [theme]);
  

    return (
        <Router>
          <div className={`App ${theme}-theme`}>
            <Header setAppleTheme={setAppleTheme} setSpotifyTheme={setSpotifyTheme} />
            <h1 className="bruh">Pick your favourite!</h1>
            <Navbar className="navbar" theme={theme} />
            <div className="hello">
              <Routes>
                <Route path="/" element={<Home theme={theme} />} />
                <Route path="/about" element={<About theme={theme} />} />
              </Routes>
            </div>
          </div>
          <footer className={`copy ${theme}-theme`}>
            <FaRegCopyright /> 2024 Cristian Troubitsin
          </footer>
        </Router>
      );
    }

export default App;
