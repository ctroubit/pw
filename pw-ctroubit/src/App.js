import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";

import { FaRegCopyright } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("spotify");
  const [isMobile, setIsMobile] = useState(false);

  const setAppleTheme = () => setTheme("apple");
  const setSpotifyTheme = () => setTheme("spotify");

  useEffect(() => {
    // Detect mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile if width <= 768px
    };

    // Initial check
    checkIfMobile();

    // Add event listener for resizing
    window.addEventListener("resize", checkIfMobile);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    document.body.classList.remove("apple-theme", "spotify-theme");
    document.body.classList.add(`${theme}-theme`);
    const favicon = document.getElementById("favicon");
    if (theme === "spotify") {
      favicon.href = `${process.env.PUBLIC_URL}/spotify.png`;
    } else if (theme === "apple") {
      favicon.href = `${process.env.PUBLIC_URL}/apple.png`;
    }
  }, [theme]);

  if (isMobile) {
    return (
      <div className="mobile-warning">
        Mobile view is still being worked on. Please view this website on a laptop or desktop.
      </div>
    );
  }

  return (
    <Router>
      <div className={`App ${theme}-theme`}>
        <Header
          setAppleTheme={setAppleTheme}
          setSpotifyTheme={setSpotifyTheme}
        />
        <Navbar className="navbar" theme={theme} />
        <div className="hello">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
            <Route path="/blog" element={<Blog theme={theme} />} />
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
