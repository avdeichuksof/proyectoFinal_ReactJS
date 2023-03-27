import './cartItem.css';
import { useCartContext } from '../../context/CartContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({product}) => {
    const {eliminarProducto} = useCartContext();
    const deleteMsg = () => toast.success("Producto eliminado.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })

    return(    
        <div className='cartItem'>
            <img src={product.img} alt={product.title}/> 
            <div>
                <div className='cartItemBody'>
                    <p><strong>Producto:</strong> {product.title}</p>
                    <p><strong>Cantidad:</strong> {product.cantidad}</p>
                    <p><strong>Precio unitario:</strong> {product.price}</p>
                    <p><strong>Subtotal:</strong> ${product.cantidad * product.price}</p>

                <button className='deleteBtn' onClick={() => eliminarProducto(product.id)}>Eliminar producto</button>
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
        </div>
    )
};

export default CartItem;