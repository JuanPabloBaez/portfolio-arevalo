import { Link } from 'react-router-dom'
import React from 'react';


function Nav() {
  return (
    <div>Nav

      <div>
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