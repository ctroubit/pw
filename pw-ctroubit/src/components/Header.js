import React from "react";
import "./Header.css";
import { AiOutlineSpotify } from "react-icons/ai";
import { SiApplemusic } from "react-icons/si";

export default function Header({ setAppleTheme, setSpotifyTheme ,theme}) {
  
  return  (
        <div className="header">
          <header className="Header">Cristian Troubitsin</header>
          <h1 className="subheader">Software Engineering Student.</h1>
          <div  className={`musDiv ${theme}-theme`}>
            <AiOutlineSpotify className='spotify'size={50} onClick={setSpotifyTheme} />
            <SiApplemusic className='apmusic'size={50} onClick={setAppleTheme} />
          </div>
        </div>
      );
}
