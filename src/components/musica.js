import React, { useEffect } from 'react'
import {useRecoilState} from 'recoil';
import {darkState} from '../App.js';


function Musica() {
  const [dark, setDark] = useRecoilState(darkState);

  useEffect( ()=>{
    async function setMusica () {
      setDark(false);
      return
    }
   setMusica()
   },[setDark])

  return (
    <div className='musica-body'>Musica</div>
  )
}

export default Musica