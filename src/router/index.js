import React from 'react';
import {BrowserRouter,Route,Switch,Router,Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import {routes} from './routes'
import User from './user'

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <User {...this.props}/>
        </Switch>
        {/*{renderRoutes(routes)}*/}
      </BrowserRouter>
    )
  }
}
