import React from "react";
import "./Blog.css"
const Blog = ({theme}) =>{
    return(
        <div className={`blog-main ${theme}-theme`}>
            <div className="blog-text">
            This page is still a work in progress. Check back later! (I'm very busy)
            </div>
        </div>
    );
}
export default Blog;