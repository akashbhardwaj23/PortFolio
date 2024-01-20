import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'


function App() {

  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
