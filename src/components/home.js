import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation} from "swiper";
import {useRecoilState, useRecoilValue} from 'recoil';
import {darkState, imgState, conciertoState, prensaState} from '../App.js'
import 'swiper/css';
import "swiper/css/effect-fade";
import HomeLogo from "../assets/logo-home-white.svg";
import MailLogo from "../assets/icons/email.svg";
import FacebookLogo from "../assets/icons/facebook.svg";
import InstaLogo from "../assets/icons/instagram.svg";
import SpotifyLogo from "../assets/icons/spotify.svg";
import YoutubeLogo from "../assets/icons/youtube.svg";


function Home() {
  const [, setDark] = useRecoilState(darkState);
  const homePics = useRecoilValue(imgState).filter((item)=>item.fields.categoria==="home");
  const conciertoLista = useRecoilValue(conciertoState).filter(item=> new Date(item.fields.fecha)  >= new Date());
  const prensaLista = useRecoilValue(prensaState)

 useEffect(()=>{
  setDark(false);
 },[setDark])

 
  return (
    <div className='home-body'>
      <header>
        <div className='home-first'>
          <img className='home-logo' src={HomeLogo} alt="logo de Alejandro Arévalo"/>
        </div>
        <Swiper
        spaceBetween={20}
        slidesPerView={1}
        effect={"fade"}
        navigation={false }
        autoplay={{
          delay: 2500,
          reverseDirection:true
        }}
        loop={true}
        className="mySwiper"
        modules={[EffectFade, Autoplay, Navigation]} 
        >
        {homePics.map((item, index)=>{
          return <SwiperSlide key={index}>
            <img className="slide-photo"  src={item.fields.img.fields.file.url}  alt="Página web de Alejandro Arévalo"/>
          </SwiperSlide>
        })}
        </Swiper>
      </header>
      <div className='home-info'>
      <div className='social'>
            <a href="mailto:conversemos@alejandroarevalo.cl" target="_blank"  rel="noreferrer"><img  src={MailLogo} alt="email de Alejandro Arévalo"/></a>
            <a href="https://open.spotify.com/artist/3LJFVzMZewx7BoG5Cuh4N5?si=i3W01HiIToepWX5Mnl4-4Q" target="_blank"  rel="noreferrer" ><img src={SpotifyLogo} alt="Spotify de Alejandro Arévalo"/></a>
            <a href="https://www.instagram.com/alejandro_arevalo_pianista/" target="_blank"  rel="noreferrer"><img src={InstaLogo} alt="Instagram de Alejandro Arévalo"/></a>
            <a href="https://www.facebook.com/AlejandroArevaloMusico" target="_blank"  rel="noreferrer"><img src={FacebookLogo} alt="Facebook de Alejandro Arévalo"/></a>
            <a href="https://www.youtube.com/user/AlejandroArevalob" target="_blank"  rel="noreferrer"><img src={YoutubeLogo} alt="Youtube de Alejandro Arévalo"/></a>
        </div>
        <div className='prox-conciertos'>
          <h2>Próximos Conciertos</h2>
        { conciertoLista.map((item, index)=>{
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
        <div className='prensa'>
          <h2>Prensa</h2>
          {
            prensaLista.map((item, index)=>{
              console.log(item)
              return( <a href={item.fields.link} target="_blank"  rel="noreferrer" > {item.fields.titulo} </a>)
             
            })
          }
        </div>
      </div>




    </div>

  )
}

export default Home