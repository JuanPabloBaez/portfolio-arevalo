import React, { useEffect } from 'react';
import {useRecoilState} from 'recoil';
import {darkState} from '../App.js';

function Galeria() {
  const [, setDark] = useRecoilState(darkState);
  
  useEffect( ()=>{
    async function setGaleria () {
      setDark(false);
      return
    }
   setGaleria()
   },[setDark])
   
  return (
    <div className='galeria-body'>Galeria</div>
  )
}

export default Galeria