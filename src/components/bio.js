import React, { useEffect} from 'react'
import {useRecoilState, useRecoilValue} from 'recoil';
import {darkState, imgState} from '../App.js'


function Bio() {
  const [dark, setDark] = useRecoilState(darkState);
  const bioPic = useRecoilValue(imgState).filter((item)=>item.fields.categoria==="bio")[0].fields.imagen.fields.file.url
  

  useEffect(async ()=>{
    setDark(true)
   },[])

   



  return (
    <div className='bio-body'>
      <h1>Biografia</h1>
      <img className="bio-photo"  src={bioPic}  alt="Retrato de Alejandro Arévalo"/>

      <p>Comienza a temprana edad sus estudios musicales con la guitarra clásica y folclórica. En el año 1999 estudia Violoncello en la academia de música Mozart, San Felipe. Luego en el año 2000 integra la Escuela de Jazz de San Felipe, interpretando el bajo eléctrico, instrumento que el año 2003 estudiaría en la escuela de música SCD, Santiago. Período en el cual estudia composición con el maestro Raúl Céspedes, así como también se desarrolla como músico de sesión en diversas aristas musicales, trabajando para la productora R&S comunicaciones.
En el año 2005 comienza sus estudios de piano clásico en el conservatorio Izidor Handler, Viña del Mar, estudiando con el maestro Aníbal Correa Blanco y Fernando Ulloa Fonseca. De forma paralela estudia la Licenciatura en Educación en la Universidad de Playa Ancha.
En el año 2007 comienza a hacer clases en la Universidad de Valparaíso en las cátedras de piano complementario, teoría del piano, piano popular y piano clásico.
En este período forma un dúo de piano y violín, junto al músico José Tomás Rives y comienza a componer su primer disco titulado “Música de Cámara”, grabado en el año 2009, Valparaíso, en la sala Musicámara de la Universidad de Valparaíso, editado en el año 2011. 
En el año 2014 comienza a hacer clases en la Universidad Santo Tomás en las cátedras de Eufonía y Pedagogía Musical, paralelo a esto trabaja en la Escuela de Lutheria Jorge Ball, en la ciudad de Osorno.
Durante este período compone el disco “Fantasías Rurales” para piano solo, grabado en el año 2014, en el teatro municipal de San Felipe, y el disco “Ofrenda a Bolivar” en colaboración con el músico venezolano Jorge Ball, grabado en el año 2013, en el colegio J. S. Bach, mezclado y masterizado en estudio Plataforma Digital en el 2015, Santiago.
Durante el año 2014 se integra a la agrupación de cumbia sicodélica Por Aquí Pasan Aviones (PAPA) como pianista y compositor, grabando el disco “En vivo, desde estudios Zanessi” en el año 2015, en la ciudad de Mendoza, Argentina.
En el año 2016 crea el Ensamble Alejandro Arévalo, con Ricardo Arévalo en Batería, y Virginia Vergara en violín. En el año 2018 el ensamble realiza una gira por Italia y Francia, para lo cual crea el disco compilatorio “Vortice”, editado en 3 idiomas.
Durante el año 2018 graba el disco “Relatos Psicobailables” junto a PAPA, en estudios CHT, Santiago.
Junto al Ensamble graba el disco “Revelaciones Extraordinarias” en el año 2019, en estudios VNA, Santiago.
Durante el Año 2020 viaja a argentina junto al Ensamble para grabar “La voz del silencio” en estudio Zanessi, Mendoza, Argentina.
En el año 2021 comieza a estudiar Magister en composición en la Universidad de Chile, graba el trabajo audiovisual “La voz del encierro” junto al Ensamble, en estudios CL-audio, Los Andes.
Durante el año 2021 comienza a trabajar con la agrupación Red Interdiciplinaria de Arte – Tierra de Larry (RIA-TDL), perteneciente a la Universidad de Chile, con quienes desarrolla trabajos de improvisación en red, con diferentes asociados alrededor del mundo.</p>
    </div>
  )
}

export default Bio