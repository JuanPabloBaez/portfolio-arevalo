import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {client} from './client';
import {atom,useRecoilState} from 'recoil';


import './styles/App.css';

import Home from './components/home';
import Nav from './components/nav';
import Musica from './components/musica';
import Bio from './components/bio';
import Docencia from './components/docencia';
import Conciertos from './components/conciertos';
import Galeria from './components/galeria';

export const darkState = atom({
  key: "dark",
  default: false ,
})
export const imgState = atom({
  key: "images",
  default: [],
})
export const audioState = atom({
  key: "audios",
  default: [],
})
export const conciertoState = atom({
  key: "conciertos",
  default: [],
})
export const biografiaState = atom({
  key: "biografia",
  default: [],
})
export const docenciaState = atom({
  key: "docencia",
  default: [],
})
export const prensaState = atom({
  key: "prensa",
  default: [],
})
export const proyectoState = atom({
  key: "proyectos",
  default: [],
})
export const videoState = atom({
  key: "videos",
  default: [],
})


function App() {
const [, setImages] = useRecoilState(imgState);
const [, setAudios] = useRecoilState(audioState);
const [, setConciertos] = useRecoilState(conciertoState);
const [, setPrensa] = useRecoilState(prensaState);
const [, setBiografia] = useRecoilState(biografiaState);
const [, setDocencia] = useRecoilState(docenciaState);
const [, setProyectos] = useRecoilState(proyectoState);
const [, setVideos] = useRecoilState(videoState);
const [dark] = useRecoilState(darkState);


useEffect(()=>{
  async function getData () {
    
    try{
      client.getEntries()
        .then(async (response)=> {
            const data = response.items;
            
            const img = data.filter(item=> item.sys.contentType.sys.id==="imagen").reverse();
            setImages(img); 
            
            const audio = data.filter(item=> item.sys.contentType.sys.id==="audio").map((item)=>{
              return {src:item.fields.audio.fields.file.url, title:item.fields.titulo ,artist:item.fields.proyecto}
            });            
            setAudios(audio);
            
            const getPrensa = data.filter(item=> item.sys.contentType.sys.id==="prensa");
            setPrensa(getPrensa);
            
            const getConciertos= data.filter(item=> item.sys.contentType.sys.id==="concierto").sort(function(a,b){
              return new Date(b.fields.fecha) - new Date(a.fields.fecha);
            });
            setConciertos(getConciertos);
             
            const bio = data.filter(item=> item.sys.contentType.sys.id==="biografia")[0].fields.textoBio;
            setBiografia(bio);

            const getProyectos = data.filter(item=> item.sys.contentType.sys.id==="proyecto");
            setProyectos(getProyectos.reverse());

            const docen = data.filter(item=> item.sys.contentType.sys.id==="docencia")[0].fields.textoDocencia;
            setDocencia(docen);
            
            const getVideos = data.filter(item=> item.sys.contentType.sys.id==="video").map((item)=>{
                return {link:item.fields.link, titulo:item.fields.titulo}
            });
            setVideos(getVideos)
           


        return
      })
    }catch(error){
      console.log('fatal error')
    }
  };
  getData();
  
},[setBiografia,setConciertos,setDocencia, setImages, setPrensa, setProyectos])


 

  return (
    <div className="App">
      <Router >
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/bio" element={<Bio />}/>            
          <Route path="/musica" element={<Musica />}/ >            
          <Route path="/docencia" element={<Docencia />}/>            
          <Route path="/conciertos" element={<Conciertos />}/>            
          <Route path="/galeria" element={<Galeria />}/>            
        </Routes>
      </Router>
      <footer >
        <p className={dark===true ? 'dark':null}>&copy; Alejandro Arévalo {new Date().getFullYear()}</p>
        <p className={dark===true ? 'dark':null}>website:  <a href="http://jpbaez.com/" target="_blank" rel="noreferrer">Juan Pablo Baez</a></p>
      </footer>

    </div>
  );
}

export default App;
