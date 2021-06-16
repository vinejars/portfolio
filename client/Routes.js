import React, {Component} from 'react'
import {Route, Switch } from 'react-router-dom'
import Main from './components/Main';



export default class Routes extends Component {


  render() {

    return (
      <div>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
      
      </div>
    )
  }
}
