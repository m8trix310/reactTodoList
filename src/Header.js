import React from 'react';
import logo from './logo.png';

function Header() {
  return (

    <div className="header">
    
<h1 className='head1'>My First react Application With Header Component</h1>
    <img src={logo} alt="logo image" height={100} width={100}></img>
      
    </div>

  
  );
}

export default Header;
