import React, { useEffect } from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {darkState} from '../App.js';

function Galeria() {
  const [dark, setDark] = useRecoilState(darkState);
  
  useEffect( ()=>{
    async function setGaleria () {
      setDark(false);
      return
    }
   setGaleria()
   },[])
  return (
    <div className='galeria-body'>Galeria</div>
  )
}

export default Galeria