import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import RecoveryPassword from './Pages/Recovery/RecoveryPassword.jsx';
import Arabes from './Pages/Escuelas/Arabes.jsx';
import Clasicas from './Pages/Escuelas/Clasicas.jsx';
import Contemporanea from './Pages/Escuelas/Contemporanea.jsx';
import Ritmica from './Pages/Escuelas/Ritmica.jsx';
import Taekwondo from './Pages/Escuelas/Taekwondo.jsx';
import Baile from './Pages/Actividades/Baile.jsx';
import Fitness from './Pages/Actividades/FitnessDance.jsx';
import Funcional from './Pages/Actividades/Funcional.jsx';
import Pilates from './Pages/Actividades/Pilates.jsx';
import RitmosLatinos from './Pages/Actividades/RitmosLatinios.jsx';
import Flexibilidad from './Pages/Actividades/Flexibilidad.jsx';



function App() {
  return (
    <Routes>
      <Route exact path='/' element=<Home/>/>
      <Route exact path='/Nosotros' element=<About/>/>
      <Route exact path='/DanzasArabes' element=<Arabes/>/>
      <Route exact path='/DanzasClasicas' element=<Clasicas/>/>
      <Route exact path='/DanzaContemporanea' element=<Contemporanea/>/>
      <Route exact path='/Ritmica' element=<Ritmica/>/>
      <Route exact path='/Taekwondo' element=<Taekwondo/>/>
      <Route exact path='/Baile' element=<Baile/>/>
      <Route exact path='/FitnessDance' element=<Fitness/>/>
      <Route exact path='/Funcional' element=<Funcional/>/>
      <Route exact path='/Flexibilidad' element=<Flexibilidad/>/>
      <Route exact path='/Pilates' element=<Pilates/>/>
      <Route exact path='/RitmosLatinos' element=<RitmosLatinos/>/>
      <Route exact path='/Registrarse' element=<Register/>/>
      <Route exact path='/Perfil' element=<Profile/>/>
      <Route exact path='/RecuperarContraseña' element=<RecoveryPassword/>/>
      <Route exact path='/Contacto' element=<Contact/>/>
    </Routes>
  );
}


export default App;
