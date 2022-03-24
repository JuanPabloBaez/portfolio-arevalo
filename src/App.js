import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {client} from './client';
import {atom} from 'recoil';
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
// const imgState = atom({
//   key: "images",
//   default: [],
// })

function App() {
const [images, setImages] = useState([]);


 
 



useEffect(()=>{
  async function getData () {
    try{
      client.getEntries().then((response)=> {
        setImages(response.items.filter((item)=> item.sys.contentType.sys.id="image"))
        return
      })
    }catch(error){
      console.log('fatal error')
    }
  };
  getData();
  
},[])



  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home img={images.filter((item)=>item.fields.categoria==="home")} />} />
          <Route path="/bio" element={<Bio img={images.filter((item)=>item.fields.categoria==="bio")} />}/>            
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
