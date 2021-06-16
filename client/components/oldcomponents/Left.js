import React, { Component } from 'react'
import ContactBox from './ContactBox'

export default class Left extends Component {
    render() {
        const today = new Date().toLocaleDateString()

        return (
            <div>
                <h3> Em Comeau </h3>
                <div id='profileinfo'> 
                <img id='empic' src='/emprofpic.jpeg' width={200}/>
                <div id='spacemaker'></div>
                <div id='onlinenow'>
                <p><i>"Create. Captivate. Code."</i></p>
                <p> Full Stack Developer <br/>Brooklyn <br/> NEW YORK <br/> United States</p>
            <img src='/myspaceon.gif' width={100}/>
            <p> Last Login: {today} </p>
            </div>
            </div>
            <p> Mood: Nerdy 🤓 </p>
            <ContactBox/>
            </div>
        )
    }
}
