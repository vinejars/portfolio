import React from 'react'
import { Link } from "react-router-dom";



export default function Navbar() {
    return (
        <div>
            <div id='navtop'></div>
        <div id='navdiv'>
             <div class="dropdown">
            <Link class='home' to='/'>Home</Link>
            <div class="dropdown-content">
            <img src='/home.png'/>
            </div>
            </div>
            <div class="dropdown">
            <a href="https://github.com/vinejars" class="github">Github</a> 
            <div class="dropdown-content">
            <img src='/github.png'/>
            </div>
            </div>
            <div class="dropdown">
            <a href="https://linkedin.com/in/em-comeau" class="linkedin">LinkedIn</a> 
            <div class="dropdown-content">
            <img src='/linkedin.png'/>
            </div>
            </div>
        </div>
        </div>
    )
}
