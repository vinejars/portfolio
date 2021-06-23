import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

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
           <div id='pics'>
           <motion.img 
           whileHover={{ scale: 1.2}}
              animate={{ opacity: 1 }}
              initial={{opacity: 0}}
              transition={{duration:1}}
           src='/emprofpic.png' alt={'picture of em'} width={400}/>
          <Link to='/'> <img src='/back.png' alt={'back button'} width={300}/>   </Link>
           </div>
        </div>
    )
}
