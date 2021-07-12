import React from 'react'
import {motion} from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const images = [
    'javascriptico',
    'htmlico',
    'cssico',
    'expressico',
    'sequelizeico',
    'sqlico',
    'reactico',
    'reduxico',
    'nodeico',
    'webpackico',
    'awsico',
    'githubico'
]
export default function TechStack() {
    return (
        <div id='techcolumns'>
       <motion.div
       variants={container}
    initial="hidden"
    animate="show" className="techcontain">
     {images.map((image) => (
        <motion.div className={image} key={image} variants={item}>
          <img src={`/${image}.png`} width={150}/>
        </motion.div>
      ))}
</motion.div>
<div id='techinfo'>
<h3> test </h3></div>
</div>
    )
}
