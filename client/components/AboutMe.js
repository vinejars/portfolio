import React from 'react'
import Left from './Left'
import Right from './Right'

export default function AboutMe() {
    return (
        <div id='columnmaker'>
     <div className='left'> <Left/> </div>
      <div className='right'> <Right/> </div>
        </div>
    )
}
