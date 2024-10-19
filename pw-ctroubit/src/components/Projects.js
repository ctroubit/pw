import React from "react";
import "./Project.css"
const Projects = ({theme}) =>{
    return(
        <div className={`projects-main ${theme}-theme`}>
            <div className='projects-text'>
            Currently in the process of uploading my projects, check soon!<br></br>
            You can also check out my Github for all my public projects! :)
            </div>
        </div>
    );
}
export default Projects;