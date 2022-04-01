import React, { useEffect, useState } from 'react'
import {useRecoilState, useRecoilValueLoadable} from 'recoil';
import {darkState, proyectoState} from '../App.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ EffectFade, Autoplay, Navigation} from "swiper";
import RichText from '@madebyconnor/rich-text-to-jsx';
import { BLOCKS } from '@contentful/rich-text-types';
import ReactPlayer from 'react-player/lazy';
import 'swiper/css';
import "swiper/css/effect-fade";

import FacebookLogo from "../assets/icons/facebook.svg";
import InstaLogo from "../assets/icons/instagram.svg";
import SpotifyLogo from "../assets/icons/spotify.svg";
import YoutubeLogo from "../assets/icons/youtube.svg";
import WebLogo from "../assets/icons/web.svg";

SwiperCore.use([Navigation]);

function Musica() {
  const [, setDark] = useRecoilState(darkState);
  const {state, contents} = useRecoilValueLoadable(proyectoState);
  const [proyectoIndex, setProyectoIndex] = useState(0);

  useEffect( ()=>{
    async function setMusica () {
      setDark(false);
      return
    }
   setMusica();
   },[setDark,proyectoIndex]) 



  return (
    <div className='musica-body'>
      <div className='button-panel'>
        {
          contents.map((item,index)=>{
            return(
            <> 
              <button  onClick={()=> setProyectoIndex(index)} key={index} className={proyectoIndex===index?"button-active":null}>{item.fields.slug}</button>  
              {index < contents.length - 1 ? "/" : "" }
            </>
            )})
        }
      </div>
      <div className='proyecto-body'>
        {
          contents.map((item,index)=>{
           
            let {nombre,
                logo,
                descripcion,
                fotos,
                linkWeb,
                linkFacebook,
                linkInstagram,
                linkYoutube,
                linkSpotify,
                linkDiscos
              } = item.fields;
            if (proyectoIndex===index)
            return(
              <>
              <div className='proyecto-header' >
                <h1>{nombre}</h1>
                {logo&& <img src={logo.fields.file.url} alt="proyecto logo" />}
                <RichText 
                  richText={descripcion}
                  overrides={{
                      [BLOCKS.PARAGRAPH]: {
                        component: "p",
                        props: {
                          className: 'proyecto text'
                        }
                      }
                    }}/>
              </div>
              { (linkWeb||linkFacebook||linkInstagram||linkYoutube||linkSpotify)&& <div className='links-proyecto'>
                    {linkWeb&&<img src={WebLogo} alt=''/>}
                    {linkSpotify&&<img src={SpotifyLogo} alt=''/>}
                    {linkYoutube&&<img src={YoutubeLogo} alt=''/>}
                    {linkFacebook&&<img src={FacebookLogo} alt=''/>}
                    {linkInstagram&&<img src={InstaLogo} alt=''/>}
                    
              </div>}
              {fotos&& <Swiper
                spaceBetween={50}
                centeredSlides={true}
                slidesPerView={1}
                loop={true}
                effect="fade"
                autoplay={{
                  delay: 4000,
                  
                }}
                navigation={true}
                modules={[Autoplay, Navigation, EffectFade]}
                className="slider-proyecto" 
                >
                {fotos.map((item, index)=>{
                  return <SwiperSlide key={index}>
                    <img className="slide-photo"  src={item.fields.file.url}  alt="Página web de Alejandro Arévalo"/>
                  </SwiperSlide>
                })}
              </Swiper>}

              {linkDiscos&& linkDiscos.map((item,index)=>{
                return (<ReactPlayer key={index}
                url={item}
                className='disco-proyecto'
                
                config={{
                  soundcloud:{
                    options:{
                      show_artwork: false,
                      show_user: false,
                      color: "#038cfc",
                    }
                  } 
                }}
              />)
              }) }
              </>
              

            )
          })
        }
      </div>
      
      
    </div>
  )
}

export default Musica