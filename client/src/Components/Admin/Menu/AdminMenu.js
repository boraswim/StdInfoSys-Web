import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function AdminMenu() {
  return (
    <div style={{backgroundColor: '#cfe2ff', width: '100%', height: '170vh'}}>


    
<ul class="nav flex-row">
  <li style={{display: 'inline-block'}} class="nav-item">
    <Link to="OgrenciEdit" class="nav-link active mt-2" href="#">Öğrenci Ekle/Düzenle</Link>
  </li>
  <li style={{display: 'inline-block'}} class="nav-item">
    <Link to="OgretmenEdit" class="nav-link active mt-2" href="#">Öğretmen Ekle/Düzenle</Link>
  </li>
  <li style={{display: 'inline-block'}} class="nav-item">
    <Link to="DersEdit" class="nav-link active mt-2" href="#">Bölüm Dersi Ekle/Düzenle</Link>
  </li>
</ul> 



<Outlet/>

    </div>

    

   
  )
}

export default AdminMenu