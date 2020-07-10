import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import * as registerServiceWork from './serviceWorker'

import App from './pages/App.tsx'
import sotre from './store/index.ts'
// 修改数据



ReactDom.render(
  <Provider store={sotre}>
    <App/>
  </Provider>,
  document.getElementById('root')
)


registerServiceWork.unregister()