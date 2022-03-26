import React, { useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {darkState, biografiaState} from '../App.js';
import RichText from '@madebyconnor/rich-text-to-jsx';
import { BLOCKS } from '@contentful/rich-text-types';
import BioPic from '../assets/bioA.webp';


function Bio() {
  const [dark, setDark] = useRecoilState(darkState);
  const bioText = useRecoilValue(biografiaState);
  



  useEffect( ()=>{
    async function setBio () {
      setDark(true);
      return
    }
   setBio()
   },[])


  return (
    <div className='bio-body'>
      <h1>Biografia</h1>
      <img className="bio-photo"  src={BioPic}  alt="Retrato de Alejandro Arévalo"/>
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