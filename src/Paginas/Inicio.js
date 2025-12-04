import './Inicio.css';
import { motion } from 'framer-motion';

function Inicio(){
    return(
        <motion.div className="inicio"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.3 }}>
            <h1>INICIO</h1>
        </motion.div>
    );
}

export default Inicio;