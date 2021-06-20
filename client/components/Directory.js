import React from 'react'
import {Link} from 'react-router-dom'

export default function Directory() {
    return (
        <div className='links'>
        <div className='container2'>
       <div className='projects'> <Link to='/projects' > <img src='/projectlink.png'/> </Link></div>
       <div className='aboutme'><Link to='/aboutme'> <img src='/aboutmelink.png'/>  </Link> </div>
       <div className='tech'><Link to='/tech'> <img src='/techlink.png'/>  </Link></div>
       <div className='social'><Link to='/social'> <img src='/sociallink.png'/> </Link></div>
        <Link to='/testimonals'> <img src='/testimonialslink.png'/>  </Link>
        </div>
        </div>
    )
}
