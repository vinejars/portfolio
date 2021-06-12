import React, {Component} from 'react'
import {Route, Switch } from 'react-router-dom'
import Main from './components/Main';
import Resume from './components/Resume'



export default class Routes extends Component {


  render() {

    return (
      <div>
          <Switch>
            <Route path="/" component={Main} />
            <Route exact path="/resume" component={Resume}/>
          </Switch>
      
      </div>
    )
  }
}
