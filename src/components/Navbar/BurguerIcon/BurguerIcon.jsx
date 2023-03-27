import './burguerIcon.css';

const BurguerIcon = (props) => {
    return (
        <div  onClick={props.clickHandler}
            className={`icon ${props.clcik ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

export default BurguerIcon;