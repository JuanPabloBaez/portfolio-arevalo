import React, { useEffect } from 'react'
import {useRecoilState, useRecoilValue} from 'recoil';
import {darkState, docenciaState} from '../App.js';
import RichText from '@madebyconnor/rich-text-to-jsx';
import { BLOCKS } from '@contentful/rich-text-types';
import docePicA from "../assets/docenciaA.webp";
import docePicB from "../assets/docenciaB.webp";




function Docencia() {
  const [dark, setDark] = useRecoilState(darkState);
  const docencia =useRecoilValue(docenciaState);

  
  useEffect(async ()=>{
    setDark(true);
    return
   },[])

 console.log()
  return (
    <div className='docencia-body'>
      <h1>Docencia</h1>
      
      <img className="doce-photoA"  src={docePicA}  alt="Retrato de Alejandro Arévalo"/>      
      <RichText 
        richText={docencia}
        overrides={{
            [BLOCKS.PARAGRAPH]: {
              component: "p",
              props: {
                className: 'text-bio'
              }
            }
          }}
      />
      <img className="doce-photoB"  src={docePicB}  alt="Retrato de Alejandro Arévalo"/>   
    </div>
  )
}

export default Docencia