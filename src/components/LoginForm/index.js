import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errormsg: ''}

  onSuccessAttempt = () => {
    const {history} = this.props
    console.log(history)
    history.replace('/')
  }

  invalid = () => {
    this.setState({errormsg: 'Username or password is invalid'})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSuccessAttempt()
    }

    if (username === 'rahul' && password === '') {
      this.invalid()
    }
    if (username === '' && password !== '') {
      this.invalid()
    }
    if (password !== '' && username !== '') {
      this.setState({errormsg: 'Username is not found'})
    }
    if (username === 'rahul' && password !== '') {
      this.setState({errormsg: "Username and Password didn't match"})
    }
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {errormsg} = this.state
    return (
      <div className="mainContainer">
        <div className="cardOne">
          <img
            className="websiteLoginImage"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="cardTwo">
            <img
              className="websiteLogoImage"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <label htmlFor="inputOne">USERNAME</label>
            <input
              className="Textinput"
              id="inputOne"
              type="input"
              placeholder="Username"
              onChange={this.onChangeName}
            />
            <label htmlFor="inputTwo">PASSWORD</label>
            <input
              className="Textinput"
              id="inputTwo"
              onChange={this.onChangePassword}
              type="password"
              placeholder="Password"
            />
            <button className="loginButton" type="submit">
              Login
            </button>
            <p className="errormsg">{errormsg} </p>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
