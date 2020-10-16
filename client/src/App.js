import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import NavBar from "./components/navbar"
import Login from "./components/login"
import Home from "./components/home"
import Register from "./components/register"
import Admin from "./components/admin"
import Todos from "./components/todos"
import Account from "./components/account"

import PrivateRoute from "./hocs/privateRoute"
import UnprivateRoute from "./hocs/unprivateRoute"

import "./styles/main.scss"

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <UnprivateRoute path="/login" component={Login} />
      <UnprivateRoute path="/register" component={Register} />
      <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos} />
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
      <PrivateRoute path="/account" roles={["admin", "user"]} component={Account} />
      
    </Router>
    
  )
}

export default App
