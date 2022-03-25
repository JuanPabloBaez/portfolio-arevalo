import { useEffect, useState } from 'react';
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

function App() {
const [images, setImages] = useRecoilState(imgState);
const [conciertos, setConciertos] = useRecoilState(conciertoState);
const [biografia, setBiografia] = useState([]);


useEffect(()=>{
  async function getData () {
    try{
      client.getEntries()
        .then((response)=> {
            const data = response.items;
            setImages(data.filter(item=> item.sys.contentType.sys.id==="imagen")); 
            const bio = data.filter(item=> item.sys.contentType.sys.id==="biografia")[0];
            setBiografia(bio);
            const getConciertos= data.filter(item=> item.sys.contentType.sys.id==="concierto").sort(function(a,b){
              return new Date(b.fields.fecha) - new Date(a.fields.fecha);
            });
            setConciertos(getConciertos);


            
            console.log(getConciertos)
        return
      })
    }catch(error){
      console.log('fatal error')
    }
  };
  getData();
  
},[])

console.log(conciertos)

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bio" element={<Bio bio={biografia}/>}/>            
          <Route path="/musica" element={<Musica />}/ >            
          <Route path="/docencia" element={<Docencia />}/>            
          <Route path="/conciertos" element={<Conciertos />}/>            
          <Route path="/galeria" element={<Galeria />}/>            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
