import { useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"

import { useStateValue } from "./StateProvider"

import { auth } from "./firebase"

import "./App.css"

function App() {
  const [, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
