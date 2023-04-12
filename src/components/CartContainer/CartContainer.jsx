import './cartContainer.css';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContextProvider';
import Checkout from './Checkout/Checkout';

const CartContainer = () => {
    const { cart, precioTotal, vaciarCarrito } = useCartContext();

    if (cart.length == 0) {
        return (
            <div className='containerEmpty'>
                <h2>El carrito está vacío.</h2>
                <Link to='/productos'>
                    <button>Ir a comprar</button>
                </Link>
            </div>
        )
    }

    return (
        <div>
            
            <div className='cartContainer'>
                {cart.map(product =>
                    <CartItem key={product.id} product={product} />)}
            </div>
            <p>
                Total: ${precioTotal()}
            </p>

            <div className='btnContainer'>
                <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            </div>
            <Checkout />
        </div>
    )
};

export default CartContainer