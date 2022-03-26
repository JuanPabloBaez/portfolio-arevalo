import React, { useEffect } from 'react';
import {useRecoilValue, useRecoilState} from 'recoil';
import {conciertoState, darkState} from '../App.js';


function Conciertos() {
  const [dark, setDark] = useRecoilState(darkState);
  const listaConciertos = useRecoilValue(conciertoState);
  
  useEffect( ()=>{
    setDark(false);
    return
   },[setDark])


  return (
    <div className='conciertos-body'>
      <h2>Conciertos</h2>
      <div className='lista-conciertos'>
        { listaConciertos.map((item, index)=>{
          
          let newDate = new Date(item.fields.fecha).toLocaleString( "es-ES" , { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
          
          
          return(
          <div className='concierto' key={index}>
            <p className='fecha'>{newDate.toUpperCase()}</p>
            <p className='recinto'>{item.fields.recinto}</p>
            <p className='ciudad'>{item.fields.ciudad}</p>
          </div>
          )
        })

        }

      </div>
    </div>
  )
}

export default Conciertos