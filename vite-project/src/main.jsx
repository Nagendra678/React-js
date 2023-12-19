import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Pop from './Pop.jsx'


ReactDOM.createRoot(document.getElementById('ugly')).render(
  <React.StrictMode>
    <App />
    <Pop />
  </React.StrictMode>,
)
