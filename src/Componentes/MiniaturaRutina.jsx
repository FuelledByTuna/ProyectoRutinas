import "../Estilos/MiniaturaRutina.css";
import { useNavigate } from "react-router-dom";

function MiniaturaRutina({imagen, children, precio, id}){
    const Navigate = useNavigate();

    if(children.length > 35) {
        children = `${children.substr(0, 35)}...`;
    }

    return (
        <div className="contenedor-mr" onClick={() => Navigate(`/rutinas/${id}`)}>
            <img className="img-mr" src={imagen} alt={children}/>
            <p className="nombre-mr texto-mr">{children}</p>
            <p className="precio-mr texto-mr">{`$${precio}`}</p>
            <button className="boton-mr">Agregar al carrito</button>
        </div>
    );

}

export default MiniaturaRutina;