import './itemQuantitySelector.css';
import { useState, useEffect } from 'react';

const ItemQuantitySelector = ( {initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const aumentarCant = () => {
        setCount(count + 1);
    };

    const disminuirCant = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]);

    return (
        <div className='counter'>
            <div className='selector'>
                <button onClick={disminuirCant} disabled={count <= 1}>-</button>
                <span className='cantidad'>{count}</span>
                <button onClick={aumentarCant}>+</button>
            </div>
            <button className='btnAdd' onClick={() => onAdd(count)}>Agregar al carrito</button> 
        </div>
    );
};

export default ItemQuantitySelector;