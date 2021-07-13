import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export default function Social() {
    return (
        <div>
        <div id='socialcontain'>
          <motion.a 
           initial={{opacity: 0, x: 300}} 
            animate={{opacity: 1, x: 0}} 
            href='https://www.linkedin.com/in/em-comeau'> <img src='/linkedinlink.png' width={300}/> </motion.a>
          <motion.a 
           initial={{opacity: 0, x: -300}} 
          animate={{opacity: 1, x: 0}} 
          href='https://www.github.com/vinejars'> <img src='/githublink.png' width={300}/></motion.a>
        </div>
        <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }} 
        id='text'> <h2>Give me a follow & let's create something together!</h2></motion.div>
       <Link to='/main'><div id='backdiv'> <img src='/back.png'/></div></Link>
        </div>
    )
}
