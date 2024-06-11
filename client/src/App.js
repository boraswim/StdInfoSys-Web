import React from 'react'
import Login from './Components/Ogrenci/Login/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Components/Ogrenci/Register/Register'
import Home from './Components/Ogrenci/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import DersAlma from './Components/Ogrenci/DersAlma/DersAlma'
import BolumDers from './Components/Ogrenci/BolumDers/BolumDers'
import Not from './Components/Ogrenci/Not/Not'
import Profil from './Components/Ogrenci/Profil/Profil'
import OgretmenLogin from './Components/Ogretmen/Login/OgretmenLogin'
import OgretmenHome from './Components/Ogretmen/Home/OgretmenHome'
import AdminLogin from './Components/Admin/Login/AdminLogin'
import AdminHome from './Components/Admin/Home/AdminHome'
import OgretmenEdit from './Components/Admin/OgretmenEdit/OgretmenEdit'
import OgrenciEdit from './Components/Admin/OgrenciEdit/OgrenciEdit'
import DersEdit from './Components/Admin/DersEdit/DersEdit'
import DersOnay from './Components/Ogretmen/DersOnay/DersOnay'
import TalepDersleri from './Components/Ogrenci/TalepDersleri/TalepDersleri'


function App() {
  return (
    <BrowserRouter>


    <div>

    <Header/>





      <Routes>
        <Route path='/adminLogin' element={<AdminLogin />}></Route>
        <Route path='/adminHome' element={<AdminHome />}>
            <Route path='ogretmenEdit' element={<OgretmenEdit/>}></Route> 
            <Route path='ogrenciEdit' element={<OgrenciEdit/>}></Route>
            <Route path='dersEdit' element={<DersEdit/>}></Route>
        </Route>
        <Route path='/ogretmenLogin' element={<OgretmenLogin />}></Route>
        <Route path='/ogretmenHome' element={<OgretmenHome />}>
            <Route path='dersonay' element={<DersOnay />}></Route>
        </Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/home' element={<Home />}>
            <Route path='dersalma' element={<DersAlma/>}></Route>
            <Route path='bolumders' element={<BolumDers/>}></Route>
            <Route path='talepdersleri' element={<TalepDersleri/>}></Route>
            <Route path='not' element={<Not/>}></Route>
            <Route path='profil' element={<Profil/>}></Route>
        </Route>
        
      </Routes>
  

      <Footer/>
      </div>
    </BrowserRouter>
      
  )
}
export default App;