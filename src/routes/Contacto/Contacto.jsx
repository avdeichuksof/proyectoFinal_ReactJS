import './contacto.css';
import { useState } from "react";
import {getFirestore, collection, addDoc} from 'firebase/firestore';

const formBase = {
    nombre: '',
    email: '',
    tel: '',
    asunto: '',
    mensaje: '',
};

const Contacto = () => {

    const [form, setForm] = useState(formBase);
    const [id, setId] = useState();

    const submitHandler = (e) => {
        e.preventDefault ();

        const db = getFirestore();
        const contacFormCollection = collection(db, 'contacform');

        addDoc(contacFormCollection, form).then((snapshot) => {
            setForm(formBase);
            setId(snapshot.id);
        });
    };

    const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    };

    /* FIJARSE DE PONER EL E.TARGET.RESET() */

    return (
        <div>
            <h2>Para consultas o pedir presupuesto, contactanos:</h2>
            <h4>Recuerde especificar medidas y/o material si es necesario.</h4>
            {typeof id !== 'undefined' ? (
                <h2>El form se ha enviado con el id: {id}</h2>
            ) : ( '' )}
            <div className='contactForm'>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input name="nombre" id="id" value={form.name} onChange={inputChangeHandler} required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" id="email" value={form.email} onChange={inputChangeHandler} required/>
                    </div>
                    <div>
                        <label htmlFor="tel">Teléfono</label>
                        <input name="tel" type="tel" id="tel" value={form.tel} onChange={inputChangeHandler} />
                    </div>
                    <div>
                        <label htmlFor="asunto">Asunto</label>
                        <input name="asunto" id="asunto" value={form.asunto} onChange={inputChangeHandler} required/>
                    </div>
                    <div className='block'>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" value={form.mensaje} onChange={inputChangeHandler} cols="10" rows="5" required></textarea>
                    </div>
                    <button className='block' type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    ) ;
};

export default Contacto;