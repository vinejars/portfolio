import React, {Component} from 'react'
import {Route, Switch } from 'react-router-dom'
import Main from './components/Main';
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Social from './components/Social'
import Testimonials from './components/Testimonials'
import Directory from './components/Directory'


export default class Routes extends Component {


  render() {

    return (
      <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/aboutme' component ={AboutMe}/>
            <Route exact path='/tech' component ={TechStack}/>
            <Route exact path='/social' component ={Social}/>
            <Route exact path='/testimonials' component ={Testimonials}/>
            <Route exact path='/directory' component={Directory}/>
          </Switch>
      
      </div>
    )
  }
}
