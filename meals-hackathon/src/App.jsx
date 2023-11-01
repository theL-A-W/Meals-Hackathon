import { useState, useEffect } from 'react'
import Home from './components/Home'
import './App.css'
import Header from './components/Header'
// import { BASE_URL } from './globals'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'


function App() {




  return (
    <div className='app'>
      <Header/>
      <Home/>
    </div>

  )
}

export default App
