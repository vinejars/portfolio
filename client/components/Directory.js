import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

export default function Directory() {
    return (
        <div>
        <div id='directoryheader'>
            <img src='ccc.png'/>
            <img src='directoryheader.png'/>
        </div>
        <div className='links'>
        <div className='container2'>
       <div className='projects'> <Link to='/projects' > <motion.img whileHover={{ scale: 1.2}} src='/projectlink.png' alt={'projects links'}/> </Link></div>
       <div className='aboutme'><Link to='/aboutme'> <motion.img whileHover={{ scale: 1.2}}  src='/aboutmelink.png' alt={'about me link'}/>  </Link> </div>
       <div className='tech'><Link to='/tech'> <motion.img whileHover={{ scale: 1.2}}  src='/techlink.png' alt={'tech link'}/>  </Link></div>
       <div className='social'><Link to='/social'> <motion.img whileHover={{ scale: 1.2}}  src='/sociallink.png' alt={'social media link'}/> </Link></div>
       <div className='testimonials'> <Link to='/testimonials'> <motion.img whileHover={{ scale: 1.2}}  src='/testimonialslink.png' alt={'testimonials link'}/></Link></div>
       <div className='home'><Link to='/main'><motion.img whileHover={{ scale: 1.2}}  src='homelink.png' alt={'home link'}/></Link></div>
        </div>
        </div>
        </div>
    )
}
