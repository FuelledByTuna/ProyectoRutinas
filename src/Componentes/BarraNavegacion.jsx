import '../Estilos/BarraNavegacion.css';
import { Link } from 'react-router-dom';
import useScrollPosition from '../Hooks/useScrollPosition';

function BarraNavegacion() {
    const isScrolled = useScrollPosition(1);
    return (
        <nav className="barra-navegacion">
            <div className={`superior ${isScrolled ? 'small' : ''}`}>
                <Link to={"/"} className="contenedor-logo-navbar">
                    <img src="" alt="LOGO" className="logo-navbar"/>
                </Link>
                <div className="contenedor-carrito-min">
                    <i className="fa-solid fa-cart-arrow-down icono-carrito" />
                    <div className="cant-carrito">
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div className="inferior">
                <div className="enlaces">
                    <Link className="link" to="/">Inicio</Link>
                    <Link className="link" to="/rutinas">Rutinas</Link>
                </div>
            </div>
        </nav>
    );

}

export default BarraNavegacion