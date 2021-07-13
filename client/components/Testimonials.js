import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
export default function Testimonials() {
    return (
            <div class="testcontainer">
  <div className="kelsey"><motion.img animate={{ opacity: 1 }}
            whileHover={{ scale: 1.2}}
            initial={{opacity: 0}}
            transition={{duration:1}}
            alt={'picture of Kelsey'}
            src='/kelsey.gif' width={200}/>
            <br/><a href='https://linkedin.com/in/kelsey-siman'> Kelsey's LinkedIn</a>
  <h4><i>Em is an amazing developer to work with. They came to our project full of ideas and enthusiasm and shaped the vision 
               of the app from the start. Their creativity and engineering expertise were crucial throughout the development of our app, 
               from storyboarding to database creation to styling to AWS integration. They were always eager to jump into unknown 
               technologies and never shied away from trying something new. Em brought so much fun to the group and their contagious 
               personality made every day working together enjoyable. Their technical skills, originality, and inventiveness make them an 
               exceptional developer. I would highly recommend Em for any software engineering project! </i> </h4> </div>
  <div className="karina"><motion.img 
                        whileHover={{ scale: 1.2}}
                        animate={{ opacity: 1 }}
                         initial={{opacity: 0}}
                         alt={'picture of Karina'}
                        transition={{duration:1}}src='/karina.gif' width={200}/>
                        <br/> <a href='https://www.linkedin.com/in/karina-zuniga/'> Karina's LinkedIn</a>
 <h4><i>Em was a pleasure to work with! They are very knowledgeable when it comes to AWS/S3, React, and Redux. They also have an amazing eye 
  for design and go the extra mile to make everything look good. They are a great team player and always willing to help and/or provide insight.</i></h4> </div>
  <div className="kat"><motion.img 
                    whileHover={{ scale: 1.2}}
                    animate={{ opacity: 1 }}
                     initial={{opacity: 0}}
                     transition={{duration:1}}
                     alt={'picture of Kat'}
                     src='/kat.gif' width={200}/>
                     <br/> <a href='https://www.linkedin.com/in/yangkb09/'> Kat's LinkedIn</a>
  <h4><i>I recently had the pleasure of working with Em during my time as a fellow for the Grace Hopper Program. 
  Em is an inquisitive and diligent software engineer who can pick up new concepts rapidly. From the beginning, I was impressed with 
  how Em consistently worked to deepen their knowledge. They demonstrated curiosity and initiative on multiple occasions, including 
  learning Amazon S3 for a solo project. I highly recommend Em as a software engineer and believe they will be an asset to any team 
  due to their persistence, clear communication, and humor.</i></h4> </div>
 <Link to='/main'> <div ><img src='/back.png' id='backtomain'/></div></Link>
</div>
           
    )
}
