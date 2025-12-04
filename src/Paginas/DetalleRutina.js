import './DetalleRutina.css';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import rutinasData from '../Datos/Rutinas.json';

function DetalleRutina(){
    const id = useParams();
    const item = rutinasData.find(x => x.id === Number(id.id));

    return (
        <motion.div className="detalle-rutina"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}>
            <div className="detalle-rutina-div1">
                <h2>Rutina</h2>
                <h1>{item.nombre}</h1>
                <div className="detalle-rutina-div2">
                    <img className="img-rutina" src={item.imagen} alt={item.nombre}/>
                    <div className="contenedor-precio">
                        <p>ARS${item.precio}</p>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
                <div className="contenedor-descripcion">
                    <h3>Descripcion</h3>
                    <p style={{whiteSpace: "pre-line"}}>{item.descripcion}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default DetalleRutina;
