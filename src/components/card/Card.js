import './card.scss';

function Card({description, name, photoUrl, price, handleClick}) {
    return (
        <div className='card'>
            <img src={photoUrl} alt='name' width='300px'/>
            <h3>{name}</h3>
            <p className='card__price'>{price}</p>
            <p className='card__descr'>{description}</p>
            <button className='card__btn card__btn-order' onClick={() => handleClick('card', name)}>Замовити</button>
        </div>
    )
}

export default Card;