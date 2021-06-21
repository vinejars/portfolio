import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import history from '../history'

const link = function(link){
    history.push(`/${link}`)
}
export default function Main() {
        const constraintsRef = useRef(null);
        return (
            <div ref={constraintsRef} >
            <div className='flexbox1'>
                <img src='/ccc.png' alt text='Em Comeau' width={400}/>
                <Link to='/directory'> <img src='/paint.png' alt text= 'click here for links' className='clickme' height={150}/>  </Link>
                </div>
             
            <div className='flexbox'>
            <div className="container">
            <div drag className="dot1"> 
            <motion.img 
            id='projects'
            alt text='projects links'
            drag  
            dragTransition={{ bounceStiffness: 600, bounceDamping: 8, power: 0.5}}   
            dragConstraints={constraintsRef}
            onDragEnd={(e)=>setTimeout(function(){link(e.target.id)}, 1500)}
            src='/orange.png'/>
            </div>
            <div drag className="dot2">
            <motion.img 
            id='aboutme'
            alt text='about me link'
            drag  
            dragTransition={{ bounceStiffness: 600, bounceDamping: 8, power: 0.8 }}
            dragConstraints={constraintsRef}            
            onDragEnd={(e)=>setTimeout(function(){link(e.target.id)}, 1500)}
            src='/blue.png'/></div>
            <div drag  className="dot3">
            <motion.img 
            id='tech'
            alt text='tech link'
            drag  
            dragTransition={{ bounceStiffness: 600, bounceDamping: 8, power: 0.8 }}
            dragConstraints={constraintsRef}
            onDragEnd={(e)=>setTimeout(function(){link(e.target.id)}, 1500)}
            src='/yellow.png'/></div>
            <div drag  className="dot4">
            <motion.img 
            id='social'
            alt text='social media link'
            drag  
            dragTransition={{ bounceStiffness: 600, bounceDamping: 8, power: 0.8 }}
            dragConstraints={constraintsRef}
            onDragEnd={(e)=>setTimeout(function(){link(e.target.id)}, 1500)}
            src='/green.png'/></div>
            <div drag  className="dot5">
            <motion.img 
            id='testimonials'
            alt text='testimonials link'
            drag  
            dragTransition={{ bounceStiffness: 600, bounceDamping: 8, power: 0.8 }}
            dragConstraints={constraintsRef}
            onDragEnd={(e)=>setTimeout(function(){link(e.target.id)}, 1500)}
            src='/red.png'/></div>
            </div>
          </div>
          </div>
        )
    }

