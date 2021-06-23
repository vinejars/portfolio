import React from 'react'
import {Link} from 'react-router-dom'

export default function Directory() {
    return (
        <div>
        <div id='directoryheader'>
            <img src='ccc.png'/>
            <img src='directoryheader.png'/>
        </div>
        <div className='links'>
        <div className='container2'>
       <div className='projects'> <Link to='/projects' > <img src='/projectlink.png' alt={'projects links'}/> </Link></div>
       <div className='aboutme'><Link to='/aboutme'> <img src='/aboutmelink.png' alt={'about me link'}/>  </Link> </div>
       <div className='tech'><Link to='/tech'> <img src='/techlink.png' alt={'tech link'}/>  </Link></div>
       <div className='social'><Link to='/social'> <img src='/sociallink.png' alt={'social media link'}/> </Link></div>
       <div className='testimonials'> <Link to='/testimonals'> <img src='/testimonialslink.png' alt={'testimonials link'}/></Link></div>
       <div className='home'><Link to='/'><img src='homelink.png' alt={'home link'}/></Link></div>
        </div>
        </div>
        </div>
    )
}
