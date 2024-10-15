import "./Home.css"
import Banner from "./Banner";
import React from "react";



const Home = ({theme}) => {
  return(
    <div className={`Home ${theme}-theme`}>
      
      <Banner className={`banner ${theme}-theme`} theme={theme}/>
      <div className={`text-div ${theme}-theme`}>
      <h1 className="HEADER1">Welcome to my website!</h1>
      
      <h1 className="HEADER2"> I'm Cristian, a 4th year software engineering student.</h1>
      <h1 className="HEADER3"> Use the sidebar  to learn more about me and my work.</h1>
      <h2 className="SMALLHEADER">PS: Hover over the photos to get them to stop at a specific time.</h2>
      </div>
    </div>
    
);
};

export default Home;