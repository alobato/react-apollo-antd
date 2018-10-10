import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const NotLoggedInRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => {
    const { from } = props.location.state || { from: { pathname: '/' } }
    if (localStorage.getItem('authUser')) return <Redirect to={{ pathname: from.pathname }}/>
    return <Component {...props} />
  }} />
)

export default NotLoggedInRoute
