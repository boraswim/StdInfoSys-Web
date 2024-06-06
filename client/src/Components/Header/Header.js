import React from 'react';

import logo from '../../Images/logo.jpg';

function Header(){
  return (
    
    <div style={{ backgroundColor: "#13263D",alignItems: 'center'}}>
      
      
      <img src={logo} alt="LOGO" style={{height: '75px'}}/>
      
      <h1 style={{ display: 'inline-block',marginLeft: '20px', color: 'white', fontWeight: 'bold', fontSize: '20px'}}>ÖĞRENCİ OTOMASYON SİSTEMİ</h1>
    </div>
  );
};

export default Header;