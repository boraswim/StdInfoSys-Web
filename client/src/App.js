import React from 'react'
import Login from './Components/Login/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import DersAlma from './Components/DersAlma/DersAlma'
import BolumDers from './Components/BolumDers/BolumDers'
import Not from './Components/Not/Not'
function App() {
  return (
    <BrowserRouter>
    <div>

    <Header/>





      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}>
            <Route path='dersalma' element={<DersAlma/>}></Route>
            <Route path='bolumders' element={<BolumDers/>}></Route>
            <Route path='not' element={<Not/>}></Route>
        </Route>
        
      </Routes>


      <Footer/>
      </div>
    </BrowserRouter>
      
  )
}

export default App