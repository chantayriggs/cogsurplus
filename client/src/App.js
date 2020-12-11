import React, { useContext } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import NavBar from "./components/navbar"
import Login from "./components/login"
import Home from "./components/home"
import Register from "./components/register"
import Admin from "./components/admin"
import Todos from "./components/todos"
import Account from "./components/account"
import Footer from "./components/footer"

import PrivateRoute from "./hocs/privateRoute"
import UnprivateRoute from "./hocs/unprivateRoute"

import Cart from "./components/cart/cart"
import SlideCart from "./components/cart/slideCart"
import Backdrop from "./components/cart/backdrop"

import Menu from "./components/sideMenu/menu"
import MenuBackdrop from "./components/sideMenu/menuBackdrop"

import { StateContext } from "./context/stateContext"

import "./styles/main.scss"

const App = () => {

  const stateContext = useContext(StateContext)

  return (
    <div>
      <Menu />
      { stateContext.showSideMenu ? <MenuBackdrop /> : null }
      <SlideCart />
      { stateContext.showCart ? <Backdrop /> : null }
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <UnprivateRoute path="/login" component={Login} />
        <UnprivateRoute path="/register" component={Register} />
        <UnprivateRoute path="/cart" component={Cart} />
        <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos} />
        <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
        <PrivateRoute path="/account" roles={["admin", "user"]} component={Account} />
        <Footer />
      </Router>
    </div>
  )
}

export default App
