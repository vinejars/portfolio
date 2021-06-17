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
            <div ref={constraintsRef} className='flexbox'>
                <img src='/ccc.png' width={400}/>
            <div className="container">
            <div drag className="dot1"> 
            <motion.img 
            id='projects'
            drag  
            dragTransition={{ bounceStiffness: 300, bounceDamping: 8, power: 0.5}}   
            dragConstraints={constraintsRef}
            onDragEnd={(e)=>setTimeout(function(){link(e.target.id)}, 1500)}
            src='/orange.png'/>
            </div>
            <div drag className="dot2">
            <motion.img 
            id='aboutme'
            drag  
            dragTransition={{ bounceStiffness: 300, bounceDamping: 8, power: 0.5 }}
            dragConstraints={constraintsRef}            
            onDragEnd={(e)=>setTimeout(function(){link(e.target.id)}, 1500)}
            src='/blue.png'/></div>
            <div drag  className="dot3">
            <motion.img 
            id='tech'
            drag  
            dragTransition={{ bounceStiffness: 300, bounceDamping: 8, power: 0.5 }}
            dragConstraints={constraintsRef}
            onDragEnd={(e)=>setTimeout(function(){link(e.target.id)}, 1500)}
            src='/yellow.png'/></div>
            <div drag  className="dot4">
            <motion.img 
            id='social'
            drag  
            dragTransition={{ bounceStiffness: 300, bounceDamping: 8, power: 0.5 }}
            dragConstraints={constraintsRef}
            onDragEnd={(e)=>setTimeout(function(){link(e.target.id)}, 1500)}
            src='/green.png'/></div>
            <div drag  className="dot5">
            <motion.img 
            id='testimonials'
            drag  
            dragTransition={{ bounceStiffness: 300, bounceDamping: 8, power: 0.5 }}
            dragConstraints={constraintsRef}
            onDragEnd={(e)=>setTimeout(function(){link(e.target.id)}, 1500)}
            src='/red.png'/></div>
          </div>
          </div>
        )
    }

