import { useState } from "react"
import { Link, useHistory } from "react-router-dom"

import { auth } from "../../firebase"

import "./Login.scss"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const login = e => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/")
      })
      .catch(err => alert(e.message))
  }

  const register = e => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push("/")
      })
      .catch(err => alert(err.message))
  }

  return (
    <div className="login">
      <Link>
        <img
          className="login__logo"
          alt="login logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png "
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login
