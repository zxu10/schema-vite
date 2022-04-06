import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Schema from './schema/schema'

// ReactDOM.render(
//   <React.StrictMode>
//     <Schema />
//   </React.StrictMode>,
//   document.getElementById('jsonld')
// )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
