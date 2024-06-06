import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function AdminMenu() {
  return (
    <div style={{backgroundColor: '#cfe2ff', width: '100%', height: '100vh'}}>


    
<ul class="nav flex-row">
  <li style={{display: 'inline-block'}} class="nav-item">
    <Link to="dersalma" class="nav-link active mt-2" href="#">Öğrenci Ders Alma Talebi</Link>
  </li>
  <li style={{display: 'inline-block'}} class="nav-item">
    <Link to="bolumders" class="nav-link active mt-2" href="#">Öğrenci Bölüm Dersleri</Link>
  </li>
  <li style={{display: 'inline-block'}} class="nav-item">
    <Link to="not" class="nav-link active mt-2" href="#">Öğrenci Not Bilgileri</Link>
  </li>
  <li style={{display: 'inline-block'}} class="nav-item">
    <Link to="profil" class="nav-link active mt-2" href="#">Admin Profili</Link>
  </li>



</ul> 



<Outlet/>

    </div>

    

   
  )
}

export default AdminMenu