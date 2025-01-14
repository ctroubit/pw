import React from "react";
import "./Navbar.css";
import { DiGithubBadge } from "react-icons/di";
import { IoIosMail } from "react-icons/io";
import { AiOutlineLinkedin } from "react-icons/ai";

const Navbar = ({ theme }) => {
  console.log(theme);
  return (
    <>
      <div id="mySidenav" className={`sidenav ${theme}-theme`}>
        <div className="shitdiv">
          <a href="/">Home</a>
          <a href="/about">About Me</a>
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
        </div>

        <div className={`mainContact ${theme}-theme`}>
          <h1 className={`Contact ${theme}-theme`}>Contact me:</h1>
          <div className={`socials ${theme}-theme`}>
            <div className="iconRow">
              <a href="mailto:ctroubit@uwo.ca" target="_blank" rel="noreferrer">
                <IoIosMail className="mail" size={50} />
              </a>
              <span className={`label ${theme}-theme`}>Email</span>
            </div>

            <div className="iconRow">
              <a
                href="https://www.linkedin.com/in/cristiantroubitsin/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin className="linked" size={50} />
              </a>
              <span className={`label ${theme}-theme`}>LinkedIn</span>
            </div>

            <div className="iconRow">
              <a
                href="https://github.com/ctroubit"
                target="_blank"
                rel="noreferrer"
              >
                <DiGithubBadge className="git" size={50} />
              </a>
              <span className={`label ${theme}-theme`}>GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
