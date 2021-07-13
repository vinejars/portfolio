import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const containerList = {
  hidden: { opacity: 0, x:300 },
  show: {
    opacity: 1,
    x:0,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0},
  show: { opacity: 1 }
}
const listItem = {
  hidden: { opacity: 0 , x: 300},
  show: { opacity: 1, x:0}
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

const tech = ['Javascript', 'HTML', 'CSS', 'Express', 'Sequelize', 'SQL/Postgres', 'React', 'Redux', 'Node', 'Webpack/Babel', 'AWS', 'Github/Git']
export default function TechStack() {
    return (
        <div id='techcolumns'>
       <motion.div
       variants={container}
    initial="hidden"
    animate="show" className="techcontain">
     {images.map((image) => (
        <motion.div className={image} key={image} variants={item}>
          <img src={`/${image}.png`} width={150} alt={`logo for ${image}`}/>
        </motion.div>
      ))}
</motion.div>
<div id='techinfo'>
<img src='/techstackheader.png'/>
<motion.ul
    variants={containerList}
    initial="hidden"
    animate="show">
  {tech.map((techItem) => (
        <motion.li key={techItem} variants={listItem} whileHover={{scale:1.2, textShadow: "-1px 1px 2px #000, 1px 1px 2px #000, 1px -1px 0 #000, -1px -1px 0 #000", color: 'white'}}>
            {techItem}
        </motion.li>
      ))}
</motion.ul>
<Link to='/main'><img className='backbutton' src='/back.png'/></Link>

</div>
</div>
    )
}
