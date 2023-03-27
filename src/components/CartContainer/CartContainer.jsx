import './cartContainer.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContextProvider';
import CartItem from '../CartItem/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const buyMsg = () => toast.success("¡Compra realizada con éxito!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

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
                <button onClick={buyMsg}>Comprar</button>
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeButton={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    type="success"
                />
            </div>
        </div>
    )
};

export default CartContainer