import React, { useEffect } from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import {darkState, imgState, videoState} from '../App.js';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";


function Galeria() {
  const [, setDark] = useRecoilState(darkState);
  const imagesGaleria = useRecoilValue(imgState).filter((item)=>item.fields.categoria==="galeria");
  const videosGaleria = useRecoilValue(videoState);

  useEffect( ()=>{
    async function setGaleria () {
      setDark(false);
      return
    }
   setGaleria()
   },[setDark])

  return (
    <div className='galeria-body'>

      <Swiper
      className="imageGallery"
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      loop
    >
      {imagesGaleria.map((item,index)=>{
        let url = item.fields.img.fields.file.url;
        return <SwiperSlide key={index}> <img src={url} alt="galeria Alehandro Arévalo" /> </SwiperSlide>
      })}
    </Swiper>


   
      {videosGaleria.map((item,index)=>{
        
        return ( 
          <div className='video-container' key={index}>
          <ReactPlayer
          className='video-player'
          url={item.link}
          config={{
            youtube: {
              playerVars: { showinfo: 1  }
            },
          }}
        />
        <p>{item.titulo}</p>
        </div>
         )
      })}
   




    </div>
  )
}

export default Galeria