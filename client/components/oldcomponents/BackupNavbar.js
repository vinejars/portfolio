import React from 'react'
import { Link } from "react-router-dom";



export default function Navbar() {
    return (
        <div>
            <div id='navtop'>
            <img src='/emspace.png' width={350}/>
            </div>
             <div className='navdiv'>
             <div className="dropdown">
            <Link className='home' to='/'>Home ▼</Link>
            <div className="dropdown-content">
            <img src='/homeimage.png'/>
            </div>
            </div>

            <div className="dropdown">
            <a href="https://github.com/vinejars" className="github">Github ▼</a> 
            <div className="dropdown-content">
            <img src='/githubimage.png'/>
            </div>
            </div>

            <div className="dropdown">
            <a href="https://linkedin.com/in/em-comeau" className="linkedin">LinkedIn ▼</a> 
            <div className="dropdown-content">
            <img src='/linkedinimage.png'/>
            </div>
            </div>

            <div className="dropdown">
            <Link to="/resume" className='resume' >Resume ▼</Link>
            <div className="dropdown-content">
            <img src='/resumeimage.png'/>
            </div>
            </div>
        </div>
        </div>
    )
}
