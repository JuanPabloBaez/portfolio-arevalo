import React, { useEffect, useState} from 'react'
import {useRecoilState, useRecoilValue} from 'recoil';
import {darkState, imgState} from '../App.js';
import RichText from '@madebyconnor/rich-text-to-jsx';
import { BLOCKS } from '@contentful/rich-text-types';


function Bio(bio) {
  const [dark, setDark] = useRecoilState(darkState);
  const [bioPic, setBioPic] = useState(imgState);
  const [bioText, setBioText] = useState("");
  const getBioPic = useRecoilValue(imgState).filter((item)=>item.fields.categoria==="bio")[0];

  useEffect(async ()=>{
    setDark(true);
    setBioPic(getBioPic.fields.img.fields.file.url);
    setBioText(bio.bio.fields.textoBio);
    
    
    return
   },[])
   
  return (
    <div className='bio-body'>
      <h1>Biografia</h1>
      <img className="bio-photo"  src={bioPic}  alt="Retrato de Alejandro Arévalo"/>
      
      <RichText 
        richText={bioText}
        overrides={{
            [BLOCKS.PARAGRAPH]: {
              component: "p",
              props: {
                className: 'text-bio'
              }
            }
          }}
      />
    </div>
  )
}

export default Bio