import './checkout.css';
import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useCartContext } from '../../../context/CartContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const { cart, precioTotal, vaciarCarrito } = useCartContext();

    const buyMsg = () => toast.success("¡Compra realizada con éxito!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        type: "success"
    });

    const order = {
        buyer: {
            name: '',
            email: '',
            tel: ''
        },
        items: cart,
        total: precioTotal()
    }
    
    const [form, setForm] = useState(order.items);
    const [id, setId] = useState()

    const submitHandler = (e) => {
        e.preventDefault();

        const dataBase = getFirestore();
        const ordersCollection = collection(dataBase, "orders");
        addDoc(ordersCollection, form, order.items).then((snapshot) => {
            setForm(form, order.items);
            setId(snapshot.id);
            setTimeout(() => {
                vaciarCarrito()
            }, 5000);
        });
    };

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div className='formContainer'>
            <h3>Ingrese sus datos:</h3>
            {typeof id !== 'undefined' ? (
                <p>Su código de orden de compra es: {id} </p>
            ) : ('')}
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input name="name" id="id" value={form.name} onChange={inputChangeHandler} required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={form.email} onChange={inputChangeHandler} required/>
                </div>
                <div>
                    <label htmlFor="email">Reingrese su email</label>
                    <input type="email" name="email" id="email" value={form.email} onChange={inputChangeHandler} required/>
                </div>
                <div>
                    <label htmlFor="tel">Teléfono</label>
                    <input type="tel" name="tel" id="tel" value={form.tel} onChange={inputChangeHandler} required/>
                </div>
                <button type='submit' onClick={buyMsg} disabled={!form.name && !form.email && !form.tel} >Realizar compra</button>
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
            </form>
        </div>
    )

}

export default Checkout