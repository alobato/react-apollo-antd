import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import NotLoggedInRoute from './NotLoggedInRoute'
import LinkMenu from './LinkMenu'

import BasicLayout from '../../components/BasicLayout'
import Dashboard from '../../components/Dashboard'
import Login from '../../components/Login'

import * as routes from '../../constants/routes'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <BasicLayout menu={<LinkMenu />}>
            <NotLoggedInRoute exact path={routes.LOGIN} component={Login} />
            <PrivateRoute exact path={routes.DASHBOARD} component={Dashboard} />
          </BasicLayout>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
