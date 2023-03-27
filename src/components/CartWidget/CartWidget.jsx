import './cartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../context/CartContextProvider';

const CartWidget = () => {
    const {contadorProductos} = useCartContext();

    return (
        <div className='cartWidget'>
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{contadorProductos() || ""}</span>
        </div>
        
    )
};

export default CartWidget;