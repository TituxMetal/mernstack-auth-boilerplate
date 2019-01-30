import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'material-icons/iconfont/material-icons.css'
import 'materialize-css/dist/css/materialize.min.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

serviceWorker.unregister()
