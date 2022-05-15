import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Auth from "./components/auth"

function Router() {
  return (
    <BrowserRouter>
    <Route path="/" component={Login} exact/>
    <Route path="/auth" component={Auth} exact/>
    <Route path="/login" component={Login} exact/>
    <Route path="/signup" component={Signup} exact/>
 
  </BrowserRouter>
  )
}

export default  Router