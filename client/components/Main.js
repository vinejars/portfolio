import React, { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Main() {
        const constraintsRef = useRef(null);
        return (
            <div ref={constraintsRef} class='flexbox'>
                <img src='/ccc.png' width={400}/>
            <div class="container">
            <div drag lass="dot1"> 
            <motion.img drag  
            dragTransition={{ bounceStiffness: 300, bounceDamping: 8, power: 0.5}}   
            dragConstraints={constraintsRef}
            src='/orange.png'/></div>
            <div drag class="dot2">
            <motion.img drag  
            dragTransition={{ bounceStiffness: 300, bounceDamping: 8, power: 0.5 }}
            dragConstraints={constraintsRef}
            src='/blue.png'/></div>
            <div drag  class="dot3">
            <motion.img drag  
            dragTransition={{ bounceStiffness: 300, bounceDamping: 8, power: 0.5 }}
            dragConstraints={constraintsRef}
            src='/yellow.png'/></div>
            <div drag  class="dot4">
            <motion.img drag  
            dragTransition={{ bounceStiffness: 300, bounceDamping: 8, power: 0.5 }}
            dragConstraints={constraintsRef}
            src='/green.png'/></div>
            <div drag  class="dot5">
            <motion.img drag  
            dragTransition={{ bounceStiffness: 300, bounceDamping: 8, power: 0.5 }}
            dragConstraints={constraintsRef}
            src='/red.png'/></div>
          </div>
          </div>
        )
    }
