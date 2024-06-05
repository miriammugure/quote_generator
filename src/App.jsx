import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import './assets/global.css'
import  Quotes from './pages/Quotes/Quotes'
const  App = () => {
  return (
    <div>
      <Header/>
      <Quotes/>
    </div>
  )
}

 

export default App
