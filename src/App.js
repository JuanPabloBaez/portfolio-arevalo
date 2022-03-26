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

function App() {
const [, setImages] = useRecoilState(imgState);
const [, setConciertos] = useRecoilState(conciertoState);
const [, setBiografia] = useRecoilState(biografiaState);
const [, setDocencia] = useRecoilState(docenciaState);
const [dark] = useRecoilState(darkState);


useEffect(()=>{
  async function getData () {
    
    try{
      client.getEntries()
        .then((response)=> {
            const data = response.items;
            const img = data.filter(item=> item.sys.contentType.sys.id==="imagen");
            setImages(img); 
            

            const bio = data.filter(item=> item.sys.contentType.sys.id==="biografia")[0].fields.textoBio;
            setBiografia(bio);

            const docen = data.filter(item=> item.sys.contentType.sys.id==="docencia")[0].fields.textoDocencia;
            setDocencia(docen);
            
            const getConciertos= data.filter(item=> item.sys.contentType.sys.id==="concierto").sort(function(a,b){
              return new Date(b.fields.fecha) - new Date(a.fields.fecha);
            });
            setConciertos(getConciertos);
            
        return
      })
    }catch(error){
      console.log('fatal error')
    }
  };
  getData();
  
},[setBiografia,setConciertos,setDocencia, setImages])




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
        <p className={dark===true ? 'dark':null}>&copy; Alenjandro Arévalo {new Date().getFullYear()}</p>
              
        <p className={dark===true ? 'dark':null}>website:  <a href="http://jpbaez.com/" target="_blank" rel="noreferrer">Juan Pablo Baez</a></p>
      </footer>

    </div>
  );
}

export default App;
