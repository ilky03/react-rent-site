import ekskavator from '../../source/img/ekskavator.jpg';

import './card.scss';

function Card() {
    return (
        <div className='card'>
            <img src={ekskavator} alt='ekskavator' width='300px'/>
            <h3>Екскаватор</h3>
            <p className='card__price'>від 2100 грн/година</p>
            <p className='card__descr'>LoremInciionem, deleniti recusandae. Iure, necessitatibus nesciunt! Nemo, nam ipsa.</p>
            <button className='card__btn card__btn-order'>Замовити</button>
            {/* <button className='card__btn card__btn-more'>Детальніше</button> */}
        </div>
    )
}

export default Card;