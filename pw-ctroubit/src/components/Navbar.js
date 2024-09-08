import React from "react";
import "./Navbar.css"

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const Navbar = () => {
      
    return (
        
        <>
        <Router>
        <div id="mySidenav" class="sidenav">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div>

            <div id="main">
            
            </div>
        </Router>
            
        </>
    );
};

export default Navbar;