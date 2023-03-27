import './itemDetail.css';
import { useCartContext } from '../../context/CartContextProvider';
import ItemQuantitySelector from './ItemQuantitySelector/ItemQuantitySelector';

const ItemDetail = ({data}) => {
    const {agregarAlCarrito} = useCartContext();

    const onAdd = (cantidad) => {
        agregarAlCarrito(data, cantidad);
    }

    return (
        <div className='cardDetail'> 
                <img className='imgDetail' src={data.img} alt={data.title} />
                <div className='bodyDetail'> 
                    <p className='titleDetail'>{data.title}</p>
                    <p className='priceDetails'>${data.price}</p>
                    <ItemQuantitySelector initial={1} onAdd={onAdd}/>
                </div>
        </div>
    );
};

export default ItemDetail;