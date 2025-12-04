import './Rutinas.css';
import MiniaturaRutina from '../Componentes/MiniaturaRutina';
import rutinasData from '../Datos/Rutinas.json';
import { motion } from 'framer-motion';

function Rutinas () {
    return(
        <motion.div className="rutinas" 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}>
            <h1 className="titulo-rutinas">¡Seleccioná la rutina qué mejor se adapte a vos!</h1>
            <div className="contenedor-busqueda">
                <div className="input-wrapper">
                    <input type="text" placeholder="Buscar una rutina" className="busqueda-rutinas" />
                    <i className="fa-solid fa-magnifying-glass icon" />
                </div>
                <h5>{rutinasData.length} rutinas a la venta</h5>
            </div>
            <div className="contenedor-rutinas">
                {
                    rutinasData.map(rutinaData => (
                        <MiniaturaRutina key={rutinaData.id} imagen={rutinaData.imagen} precio={rutinaData.precio} id={rutinaData.id}>{rutinaData.nombre}</MiniaturaRutina>
                    ))
                }
            </div>
        </motion.div>
    );
}

export default Rutinas