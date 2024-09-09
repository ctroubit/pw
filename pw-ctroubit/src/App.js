import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";



function App() {
    return (
        <Router>
            <>
        <Header/>
        <h1 className="bruh">pick your favourite!</h1>
        <Navbar></Navbar>

        <Routes>
            <Route path='/' element={<><Home></Home></>}/>
            <Route path='/about' element={<><About></About></>}/>
        </Routes>
        </>
        </Router>
        
        
    );
}
export default App;
