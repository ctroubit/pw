import "./Home.css"
import Banner from "./Banner";
import React from "react";



const Home = () => {
  return(
    <div className="Home">
      <Banner className="banner" />
      <div className="text-div">
      <h1 className="HEADER1">Welcome to my website!</h1>
      
      <h1 className="HEADER2"> I'm Cristian, a 4th year software engineering student</h1>
      <h1 className="HEADER3"> Use the sidebar  to learn more about me and my work</h1>
      <h2 className="SMALLHEADER">PS: Hover over the photos to get them to stop at a specific time.</h2>
      </div>
      
     

      

    </div>
    
);
};

export default Home;