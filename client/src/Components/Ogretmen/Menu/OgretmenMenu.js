import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function OgetmenMenu() {
  return (
    <div style={{backgroundColor: '#cfe2ff', width: '100%', height: '100vh'}}>


    
<ul class="nav flex-row">
  <li style={{display: 'inline-block'}} class="nav-item">
    <Link to="dersonay" class="nav-link active mt-2" href="#">Öğretmen Ders Onaylama</Link>
  </li>



</ul> 



<Outlet/>

    </div>

    

   
  )
}

export default OgetmenMenu