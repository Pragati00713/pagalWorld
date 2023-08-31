import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './Nav.jsx'
import Cont1 from './Cont1.jsx'
import Songs_list from './Songs_list.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Nav />
    <Cont1 />
    <Songs_list />
    <Footer />
  </React.StrictMode>,
)
