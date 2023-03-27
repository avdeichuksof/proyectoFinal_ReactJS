import './inicio.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Inicio = () => {
    return <div>
        <h1>Bienvenidos a J&S Maderas</h1>
        <p>Contamos con una trayectoria de más de 30 años, brindando la mejor calidad.</p>
        <img className='imgIndex' src='https://images.pexels.com/photos/1170737/pexels-photo-1170737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='wood texture'/>
        
            <Link to='/productos' className='link'>
                <button className='verProds'>Ver productos</button>
            </Link>
            <p>Si necesitas asesorarte o un presupuesto personalizado, podes comunicarte con nosotros haciendo click acá <FontAwesomeIcon icon={faArrowDown} />, o comunicate al 2202-4769 </p>
            <Link to='/contacto' className='link'>
                <button className='presupuesto'>Pedí tu presupuesto</button>
            </Link>
    </div>
};

export default Inicio