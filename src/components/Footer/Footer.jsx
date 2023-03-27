import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Footer = () => {
    return <footer className="footer">
            <div className="box_container">
                <div className="box">
                    <h2>REDES SOCIALES | CONTACTO :</h2>
                    <div className="redesSociales">
                        <a href="#"> <FontAwesomeIcon icon={faWhatsapp} /> </a>
                        <a href="#"> <FontAwesomeIcon icon={faInstagram} /> </a>
                        <a href="#"> <FontAwesomeIcon icon={faEnvelope} /> </a>
                    </div>
                    <p>Tel: 2202-4769</p>
                </div>
            </div>
            <div className="copy_container">
                <p>&copy; 2023 J&S Maderas - Todos los derechos reservados.</p>
            </div>

    </footer>
};

export default Footer;