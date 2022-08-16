import React, { useEffect, useState } from 'react'
import {useRecoilState, useRecoilValueLoadable} from 'recoil';
import {darkState, proyectoState} from '../App.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation} from "swiper";
import RichText from '@madebyconnor/rich-text-to-jsx';
import { BLOCKS } from '@contentful/rich-text-types';
import ReactPlayer from 'react-player/lazy';
import 'swiper/css';
import "swiper/css/effect-fade";

//import Partitura from "./musica-pdf"
import FacebookLogo from "../assets/icons/facebook.svg";
import InstaLogo from "../assets/icons/instagram.svg";
import SpotifyLogo from "../assets/icons/spotify.svg";
import YoutubeLogo from "../assets/icons/youtube.svg";
import WebLogo from "../assets/icons/web.svg";

SwiperCore.use([Navigation]);


function Musica() {
  const [, setDark] = useRecoilState(darkState);
  const { contents} = useRecoilValueLoadable(proyectoState);
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
                linkDiscos,
                //partituras
              } = item.fields;
            if (proyectoIndex===index){
              
            return(
            <>
              <div className='proyecto-header'  >
                <h1>{nombre}</h1>
                {logo && <img src={logo.fields.file.url} alt="proyecto logo" />}
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
                    {linkWeb &&  <a href={linkWeb} target="_blank"  rel="noopener noreferrer"> <img src={WebLogo} alt='website'/> </a>}
                    {linkSpotify&& <a href={linkSpotify}target="_blank"  rel="noopener noreferrer"><img src={SpotifyLogo} alt='Spotify account'/></a>}
                    {linkYoutube&& <a href={linkYoutube}target="_blank"  rel="noopener noreferrer"><img src={YoutubeLogo} alt='Youtube channel'/></a>}
                    {linkFacebook&& <a href={linkFacebook}target="_blank"  rel="noopener noreferrer"><img src={FacebookLogo} alt='Facebook page'/></a>}
                    {linkInstagram&& <a href={linkInstagram}target="_blank"  rel="noopener noreferrer"><img src={InstaLogo} alt='Instagram account'/></a>}
                    
              </div>}
 
              {fotos&& <Swiper
                className="slider-proyecto" 
                spaceBetween={50}
                slidesPerView={1}
                navigation={true}
                loop
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

              {/* {partituras&& partituras.map((item,index)=>{
                
                return  <Partitura item={item} index={index} />
              })} */}


             </>  
            )} else return null;
          
          })
        }
      </div>
      
      
    </div>
  )
}

export default Musica