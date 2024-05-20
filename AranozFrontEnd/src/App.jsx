import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/:id' element={<Form/>} ></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
