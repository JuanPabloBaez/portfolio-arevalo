import { Link } from 'react-router-dom'
import React from 'react';


function Nav() {


  return (
    <div className='nav-bar'>
      <Link to="/"><img className='logo' src="/logo-nav-white.svg" alt="image" /></Link>
      <div className='nav-links'>
        <Link to="/bio">BIO</Link>
        <Link to="/musica">MUSICA</Link>
        <Link to="/docencia">Docencia</Link>
        <Link to="/conciertos">CONCIERTOS</Link>
        <Link to="/galeria">GALERIA</Link>
      </div>
    </div>
  )
}

export default Nav