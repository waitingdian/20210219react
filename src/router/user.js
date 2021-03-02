import React from 'react';
import {Route,Router} from 'react-router-dom'
import Login from '../pages/login'
import User_userInfo from '../pages/user/userInfo'

class user extends React.Component{
  constructor(p){
    super(p)
  }
  render(){
    return (
      <Route>
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/user_userInfo"} component={User_userInfo} />
      </Route>
    )
  }
}
export default user
