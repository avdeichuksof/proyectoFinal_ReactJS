import './navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logoWhite from '../../img/logoWhite.png';
import CartWidget from '../CartWidget/CartWidget';
import BurguerIcon from './BurguerIcon/BurguerIcon';
import NavCategory from './NavCategory/NavCategory';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const clickHandler = () => {
        setClick(!click);
    };

    const [submenu, setSubmenu] = useState(false);
    const submenuHandler = () => {
        setSubmenu(!submenu);
    }

    return (
        <header className='navBar'>
            <Link to="/"> 
                <img src={logoWhite} alt="logo" className='logo'/> 
            </Link>

            <nav>
                <ul className={`${click ? 'mobile' : 'inline'}`}>
                    <li>
                        <NavLink to="/" className='menu_item'>Inicio</NavLink>
                    </li>
                    <li className='menu_item' onClick={submenuHandler}>
                        Productos <FontAwesomeIcon icon={faCaretDown} />
                        <ul className={`subMenu ${submenu ? 'open' : 'closed'}`}>
                            <NavCategory />
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/contacto" className='menu_item'>Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros" className='menu_item'>Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart"> 
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className='burguerIcon'>
                <BurguerIcon click={click} clickHandler={clickHandler}/>
            </div>

        </header>
    )
};

export default Navbar;