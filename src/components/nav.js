import React from 'react';
import { Link } from 'react-router-dom'
import {useRecoilValue} from 'recoil';
import {darkState} from '../App.js'



function Nav() {
    const darkMode= useRecoilValue(darkState);
   

  return (
    <div className='nav-bar'>
      <Link to="/"><img className='logo' src={darkMode===false? "/logo-nav-white.svg":"/logo-nav.svg"} alt="logo navegación" /></Link>
      <div className={darkMode===true? 'nav-links dark':'nav-links'}>
        <Link to="/bio">BIO</Link>
        <Link to="/musica">MUSICA</Link>
        <Link to="/docencia">DOCENCIA</Link>
        <Link to="/galeria">GALERIA</Link>
      </div>
    </div>
  )
}

export default Nav