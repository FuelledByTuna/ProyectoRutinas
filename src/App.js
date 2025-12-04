import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';
import Rutinas from './Paginas/Rutinas';
import Inicio from './Paginas/Inicio';
import BarraNavegacion from './Componentes/BarraNavegacion';
import Footer from './Componentes/Footer';
import DetalleRutina from './Paginas/DetalleRutina';

function AnimatedRoutes() {
  const location = useLocation();

  return (
      <div className="App">
        <BarraNavegacion/>
        <div className="rutas">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Inicio />} />
              <Route path="/rutinas" element={<Rutinas />} />
              <Route path="/rutinas/:id" element={<DetalleRutina />} />
            </Routes>
          </AnimatePresence>
        </div>
        <Footer/>
      </div>
  );
}

function App(){
  return(
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}



export default App;
