import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import * as registerServiceWork from './serviceWorker'

import App from './pages/App'
import sotre from './store/index'




ReactDom.render(
  <Provider store={sotre}>
    <App/>
  </Provider>,
  document.getElementById('root')
)


registerServiceWork.unregister()