import React from 'react'
import {motion} from 'framer-motion'

export default function Right() {
    return (
        <div id='rightoutside'>
          <motion.div
            animate={{ x: 100 }}
             transition={{ type: "spring", stiffness: 300 }}
             whileHover={{scale:1.2}}>
          <h1>Fun Facts About Em:</h1>
          </motion.div>
          <div id='funfacts'>
            <motion.p whileHover={{color: '#9e13bd'}}>I have synesthesia! For me, numbers have colors and math is akin to sculpting colorful mounds of clay. <br/>I also have really strong emotional ties to colors due to this and choose to surround myself with as much color as possible.</motion.p><br/>
            <motion.p whileHover={{color: '#18878f'}}> I have a 16 year old cat called Brigadoon who has an extremely yodely meow. <img src='/brigs.png' width={50}/></motion.p><br/>
            <motion.p whileHover={{color: '#ad1375'}}>I love to paint and create mixed media, but don't own a single paintbrush. I most often use bubble wrap, plastic bags, and my fingers.</motion.p><br/>
            <motion.p whileHover={{color: '#bf5c22'}}>I used to volunteer as a clown at the Boston Children's Hospital and make balloon animals for the kids there. I still have my curly yellow wig, though these days I volunteer through Big Brothers Big Sisters and Lasagna Love.</motion.p><br/>
            <motion.p whileHover={{color: '#71a33e'}}>I graduated from the Grace Hopper Program in May of 2021 and ended up becoming a teaching fellow there because I loved it so much! (And was actually really good at it?) If you had told me in November of 2020 that the random Udemy course I was taking would become my passion and chosen career path I would have laaaaauuughed. But I wouldn't have it any other way.</motion.p><br/>
            </div>
  </div>
    )
}


