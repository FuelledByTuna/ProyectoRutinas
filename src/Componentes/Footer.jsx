import '../Estilos/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <Link to={"/"} className="contenedor-logo-footer">
                <img src="" alt="LOGO" className="logo-footer"/>
            </Link>
            <div className="linea" />
            <h2>Mis redes</h2>
            <div className="contenedor-redes">
                <a href="https://www.instagram.com/lucasolmos_musculacion/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram instagram-logo" />
                </a>
            </div>
        </div>
    );
}

export default Footer;