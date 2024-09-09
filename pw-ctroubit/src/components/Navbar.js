import React from "react";
import "./Navbar.css";
import { DiGithubBadge } from "react-icons/di";
import { IoIosMail } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div id="mySidenav" className="sidenav">
        <div className="shitdiv">
          <a href="/">Home</a>
          <a href="/about">About Me</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
        </div>

        <h1 className="Contact">Contact me:</h1>

        <div className="mainContact">
          <a href="mailto:ctroubit@uwo.ca" target="_blank">
            <IoIosMail className="mail" size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/cristiantroubitsin/"
            target="_blank"
          >
            <AiOutlineLinkedin className="linked" size={50} />
          </a>
          <a href="https://github.com/ctroubit" target="_blank">
            <DiGithubBadge className="git" size={50} />
          </a>
        </div>
      </div>

      <div id="main"></div>
    </>
  );
};

export default Navbar;
