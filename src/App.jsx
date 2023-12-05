import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/nav/NavBar';
import { Home } from './pages/Home';
import { Empresas } from './pages/Empresas';
import { Oportunidades } from './pages/Oportunidades';
import { Agenda } from './pages/Agenda';
import { MisPublicaciones } from './pages/MisPublicaciones';
import { MisPostulaciones } from './pages/MisPostulaciones';
import { Publicar } from './pages/Publicar';
import { Ayuda } from './pages/Ayuda';
import './App.css';

function App() {
  return (
    <div className='appContainer'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/empresas' element={<Empresas />} />
        <Route path='/oportunidades' element={<Oportunidades />} />
        <Route path='/agenda' element={<Agenda />} />
        <Route path='/misPublicaciones' element={<MisPublicaciones />} />
        <Route path='misPostulaciones' element={<MisPostulaciones />} />
        <Route path='/ayuda' element={<Ayuda />} />
        <Route path='/publicar' element={<Publicar />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
