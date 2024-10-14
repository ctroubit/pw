import React, { useState } from "react";
import "./Header.css";
import { AiOutlineSpotify } from "react-icons/ai";
import { SiApplemusic } from "react-icons/si";

export default function Header() {
    const [isAppleTheme, setAppleTheme] = useState(false);
    const [isSpotifyTheme, setSpotifyTheme] = useState(true); // Start with the default theme (Spotify style)

    // Function to toggle Apple Music theme
    const toggleAppleTheme = () => {
        setAppleTheme(true);  // Enable Apple Music theme
        setSpotifyTheme(false);  // Disable Spotify theme
    };

    // Function to toggle Spotify (original) theme
    const toggleSpotifyTheme = () => {
        setSpotifyTheme(true);  // Enable Spotify (default) theme
        setAppleTheme(false);  // Disable Apple Music theme
    };

    return (
        <div className={isAppleTheme ? "main apple-theme" : isSpotifyTheme ? "main spotify-theme" : "main"}>
            <header className="Header">Cristian Troubitsin</header>
            <h1 className="subheader">Software Engineering Student.</h1>
            <div className="musDiv">
                {/* Spotify button: reverts to default theme */}
                <AiOutlineSpotify className="spotify" size={50} onClick={toggleSpotifyTheme} />
                
                {/* Apple Music button: switches to Apple Music theme */}
                <SiApplemusic className="apmusic" size={50} onClick={toggleAppleTheme} />
            </div>
        </div>
    );
}
