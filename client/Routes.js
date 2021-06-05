import React, {Component} from 'react'
import {Route, Switch } from 'react-router-dom'
import Main from './components/Main';

/**
 * COMPONENT
 */
export default class Routes extends Component {


  render() {

    return (
      <div>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
      
      </div>
    )
  }
}
