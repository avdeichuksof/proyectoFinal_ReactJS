import React, {useState, useContext} from "react";

const CartContext = React.createContext('');
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (item, newCant) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push({ ...item, cantidad: newCant });
        setCart(newCart);
    };

    const eliminarProducto = (id) => setCart(cart.filter(producto => producto.id !== id));

    const buscarEnCarrito = (id) => cart.find(producto => producto.id === id) ? true : false;
    
    const vaciarCarrito = () => setCart([]);

    const precioTotal = () => {
        return cart.reduce((acumulador, actual) => acumulador + actual.cantidad * actual.price, 0);
    }

    const contadorProductos = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);


    return (
        <CartContext.Provider value = {{
        agregarAlCarrito, 
        eliminarProducto, 
        buscarEnCarrito, 
        vaciarCarrito,
        precioTotal,
        contadorProductos,
        cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;