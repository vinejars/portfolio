import React from 'react'
import {Link} from 'react-router-dom'

export default function Directory() {
    return (
        <div className='links'>
        <div className='container2'>
       <div className='projects'> <Link to='/projects' > <img src='/projectlink.png' alt text='projects links'/> </Link></div>
       <div className='aboutme'><Link to='/aboutme'> <img src='/aboutmelink.png' alt text='about me link'/>  </Link> </div>
       <div className='tech'><Link to='/tech'> <img src='/techlink.png' alt text='tech link'/>  </Link></div>
       <div className='social'><Link to='/social'> <img src='/sociallink.png' alt text='social media link'/> </Link></div>
        <Link to='/testimonals'> <img src='/testimonialslink.png' alt text='testimonials link'/>  </Link>
        </div>
        </div>
    )
}
