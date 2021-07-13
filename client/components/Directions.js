import React from 'react'
import {Link} from 'react-router-dom'

export default function Directions() {
    return (
        <div id='dirout'>
             <div id='modal'>
                <h1> Welcome!</h1>
            <h2> Fling the paint dots around to navigate my portfolio site, or click the link in the top right to access a static directory!</h2>
            <h3> So excited you're here and I hope you enjoy!</h3>
            <Link to='/main'><button id='modalbutton'>✗</button></Link>
            </div>
    </div>
    )
}
