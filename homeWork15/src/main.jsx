import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from "./components/Header"
import Title from "./components/Title.jsx"
import Footer from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Title/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
