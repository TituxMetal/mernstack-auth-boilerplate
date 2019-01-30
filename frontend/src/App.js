import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Switch, Route, withRouter } from 'react-router-dom'
import Materialize from 'materialize-css/dist/js/materialize'

import { Home, Login, Register, Dashboard } from './pages/'
import { Navmenu } from './components/layout/'
import { GlobalStyle, theme } from './components/styled'
import { Provider } from './context'
import { apiRequest } from './api';

class App extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
    isAuthenticated: false
  }

  componentDidMount() {
    const sidenavEl = document.querySelectorAll('.sidenav')
    Materialize.Sidenav.init(sidenavEl)
  }

  submitHandler = async values => {
    const request = this.props.location.pathname.replace('/', '')
    const res = await apiRequest(values, request)
    
    if (res.errors) {
      return res
    }
    
    localStorage.authToken = res.token
    this.setState({ isAuthenticated: true })
    this.props.history.push('/dashboard')
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  getContext = () => ({
    ...this.state,
    submitHandler: this.submitHandler
  })

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider value={this.getContext()}>
          <GlobalStyle />
          <Navmenu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default withRouter(App)
