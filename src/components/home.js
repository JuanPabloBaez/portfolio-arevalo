import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation} from "swiper";
import {useRecoilState, useRecoilValue} from 'recoil';
import {darkState, imgState} from '../App.js'
import 'swiper/css';
import "swiper/css/effect-fade";
import HomeLogo from "../assets/logo-home-white.svg";


function Home() {
  const [dark, setDark] = useRecoilState(darkState);
  const homePics = useRecoilValue(imgState).filter((item)=>item.fields.categoria==="home")


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




    </div>

  )
}

export default Home