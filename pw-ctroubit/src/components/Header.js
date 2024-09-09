import React from "react";
import "./Header.css"
import { AiOutlineSpotify } from "react-icons/ai";
import { SiApplemusic } from "react-icons/si";



export default function Header(){
    return(
        <div class = "main">
        <header class="Header">Cristian Troubitsin</header>
        <h1 class = "subheader">Software Engineering Student.</h1>
        <div className="musDiv">
        <AiOutlineSpotify className="spotify" size={50}/>
        <SiApplemusic className="apmusic" size = {50}/>
        </div>
        </div>
        
    );
}

