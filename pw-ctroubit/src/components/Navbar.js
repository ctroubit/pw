import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />



                <NavMenu>
                    <NavLink to="/">
                        Home

                    </NavLink>
                    <NavLink to="/about" >
                        About
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Events
                    </NavLink>
                    <NavLink to="/annual" activeStyle>
                        Annual Report
                    </NavLink>
                    <NavLink to="/team" activeStyle>
                        Teams
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        Blogs
                    </NavLink>
                    
                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navbar;