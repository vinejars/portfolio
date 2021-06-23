import React from 'react'
import {motion} from 'framer-motion'

export default function Left() {
    return (
        <div>
           <img src='/ccc.png' alt={'Em Comeau'}/>
           <motion.div
            animate={{ x: 100 }}
             transition={{ type: "spring", stiffness: 300 }}>
           <h2>they/them</h2>
           <h3>Brooklyn, NY</h3> 
           </motion.div>
           <img src='emprofpic.png'/>
        </div>
    )
}
