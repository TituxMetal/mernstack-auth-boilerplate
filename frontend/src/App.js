import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route, withRouter } from 'react-router-dom'
import Materialize from 'materialize-css/dist/js/materialize'

import { Home, Login, Register, Dashboard } from './pages/'
import { Navmenu } from './components/layout/'
import { GlobalStyle, theme } from './components/styled'
import { Provider } from './context'
import { authRequest, secretRequest } from './api'
import { GuestRoute, UserRoute } from './routes/'

class App extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
    isAuthenticated: !!localStorage.getItem('authToken'),
    secret: false
  }

  async componentWillMount() {
    const sidenavEl = document.querySelectorAll('.sidenav')
    Materialize.Sidenav.init(sidenavEl)
    this.state.isAuthenticated && await this.verifyToken()
  }

  async componentWillUpdate() {
    this.state.isAuthenticated && await this.verifyToken()
  }

  verifyToken = async () => {
    const token = localStorage.getItem('authToken')
    const res = await secretRequest(token)
    !res && this.logout()
  }

  submitHandler = async values => {
    const request = this.props.location.pathname.replace('/', '')
    const res = await authRequest(values, request)

    if (res.errors) {
      return res
    }
    
    localStorage.authToken = res.token
    this.setState({ isAuthenticated: true })
    this.props.history.push('/dashboard')
  }

  logout = () => {
    localStorage.removeItem('authToken')
    this.setState({ isAuthenticated: false })
  }

  getSecret = async () => {
    const token = localStorage.getItem('authToken')
    const res = await secretRequest(token)
    
    this.setState({ secret: res.secret })
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  getContext = () => ({
    ...this.state,
    submitHandler: this.submitHandler,
    logoutHandler: this.logout,
    getSecret: this.getSecret
  })

  render() {
    const { location } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Provider value={this.getContext()}>
          <GlobalStyle />
          <Navmenu />
          <Switch>
            <Route path="/" exact component={Home} />
            <GuestRoute location={location} path="/login" component={Login} />
            <GuestRoute location={location} path="/register" component={Register} />
            <UserRoute location={location} path="/dashboard" component={Dashboard} />
          </Switch>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default withRouter(App)
