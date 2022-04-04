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
        <Link to="/bio">Bio</Link>
        <Link to="/musica">Música</Link>
        <Link to="/docencia">Docencia</Link>
        <Link to="/galeria">Galeria</Link>
      </div>
    </div>
  )
}

export default Nav