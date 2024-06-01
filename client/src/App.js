import React from 'react'
import Login from './Components/Login/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
      
  )
}

export default App