import './item.css';
import { Link } from 'react-router-dom';

const Item = ({info}) => {

    return (
            <Link to={`/item/${info.id}`} className='cardItem'>
                <img src={info.img} alt={info.title} className='imgDetail'/>
                <div className='bodyDetail'>
                    <p> <strong>{info.title}</strong> </p>
                    <p> ${info.price}</p>
                </div>
            </Link>
        
    );
};

export default Item;