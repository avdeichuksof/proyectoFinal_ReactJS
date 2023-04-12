import './cartItem.css';
import { useCartContext } from '../../context/CartContextProvider';

const CartItem = ({product}) => {
    const {eliminarProducto} = useCartContext();

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
                </div>
            </div>
        </div>
    )
};

export default CartItem;