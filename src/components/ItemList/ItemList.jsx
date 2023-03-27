import './itemList.css';
import Item from "../Item/Item";

const ItemList = ({data = []}) => {
    return <div className='itemContainer'>
        {data.map((item) => <Item key={item.id} info={item} className="items"/>)}
    </div>
};

export default ItemList