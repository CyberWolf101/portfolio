import React from 'react'
import ReactDOM from 'react-dom/client'
import './StyleSheets/index.css'
import './StyleSheets/App.css'
import './StyleSheets/sandbox.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle"


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)