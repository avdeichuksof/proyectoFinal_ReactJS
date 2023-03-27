import './navCategory.css';
import { NavLink } from 'react-router-dom';

const NavCategory = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/productos" className='menu_item'>Todo</NavLink>
                </li>
                <li>
                    <NavLink to="/category/placas" className='menu_item'>Placas</NavLink>
                </li>
                <li>
                    <NavLink to="/category/techos" className='menu_item'>Techos</NavLink>
                {/* VIGAS - TIRANTES - MACHIMBRES - ALFAJIAS - YESEROS - CENEFAS - FIELTRO - ESPUMA ALUMINIZADA/AISLANTE TERMICO */}
                </li>
                <li>
                    <NavLink to="/category/escaleras" className='menu_item'>Escaleras</NavLink>
                    {/* ESCALONES - LIMONES - PASAMANOS - PALOS TORNEADOS - ESCALERAS PORTATILES(?) */}
                </li>
                <li>
                    <NavLink to="/category/mesadas" className='menu_item'>Mesadas</NavLink>
                </li>
                <li>
                    <NavLink to="/category/molduras" className='menu_item'>Molduras</NavLink>
                    {/* ZOCALOS - ESQUINEROS - CONTRAMARCOS - CENEFAS */}
                </li>
                <li>
                    <NavLink to="/category/quincho" className='menu_item'>Quincho</NavLink>
                    {/* TABLAS PARRILLERAS - MESAS - BANCOS */}
                </li>
                <li>
                    <NavLink to="/category/otros" className='menu_item'>Otros</NavLink>
                    {/* MADERAS PARA PORTONES - PALOS DE AMASAR - PRESERVADOR DE MADERA - COLA VINILICA - MASILLA - COLA ESPECIAL - MENSULAS - MADERAS Y TIRANTES PARA DECK*/}
                </li>
            </ul>
        </nav>
    );
};

export default NavCategory;
