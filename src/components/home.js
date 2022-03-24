import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation} from "swiper";
import {useRecoilState} from 'recoil';
import {darkState} from '../App.js'
import 'swiper/css';
import "swiper/css/effect-fade";



function Home({img}) {
  const [dark, setDark] = useRecoilState(darkState)
  
  setDark(false)

  return (
    <div className='home-body'>
      <header>
        <div className='home-first'>
          <img className='home-logo' src='./logo-home-white.svg' alt="logo de Alejandro Arévalo"/>
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
        {img.map((item, index)=>{
          return <SwiperSlide key={index}>
            <img className="slide-photo"  src={item.fields.imagen.fields.file.url}  alt="Página web de Alejandro Arévalo"/>
          </SwiperSlide>
        })}
        </Swiper>
      </header>




    </div>

  )
}

export default Home