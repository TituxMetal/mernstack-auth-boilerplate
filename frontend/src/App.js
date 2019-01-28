import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Materialize from 'materialize-css/dist/js/materialize'

import { Home, Login, Register, Dashboard } from './pages/'
import { Navmenu } from './components/layout/'
import { GlobalStyle, theme } from './components/styled'
import { Provider } from './context'

class App extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordRepeat: ''
  }

  componentDidMount() {
    const sidenavEl = document.querySelectorAll('.sidenav')
    Materialize.Sidenav.init(sidenavEl)
  }

  submitHandler = values => {
    console.log('App submitHandler()', values)
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
      <BrowserRouter>
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
      </BrowserRouter>
    )
  }
}

export default App
