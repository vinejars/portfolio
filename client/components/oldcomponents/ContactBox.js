import React, { Component } from 'react'

export default class ContactBox extends Component {
    render() {
        return (
            <div>
                <div id='header'>Contacting Em:</div>
                <div id='box'>
                <div id='boxright'>
                <p>Email: comeau.em@gmail.com<br/><br/><br/>
                Phone: 929•526•7939<br/>
                </p>
                </div>
                <div id='boxleft'>
                <p>
                Github: github.com/vinejars<br/><br/><br/>
                LinkedIn: linkedin.com/in/em-comeau<br/>
                </p>
                </div>
                </div>
            </div>
        )
    }
}
