import { useEffect, useState } from 'react';

import Card from '../card/Card';
import Spinner from '../spinner/Spinner';

import useServices from '../../services/Services';
import './cardList.scss';

function CardList({ handleClick }) {
  const [data, setData] = useState([]);
  const {fetchData, isLoading} = useServices();

  useEffect(() => {
    fetchData('cards').then(data => setData(data));
  }, []);

  return (
    <div id='machinery'>
      <h2>Спецтехніка</h2>
      <p className='machinery__description'>Ви маєте на меті виконати будівельні чи земельні роботи, і вам потрібна надійна спецтехніка для їх виконання? Ми маємо рішення для вас. Наша компанія пропонує оренду сучасної спецтехніки, яка допоможе вам впоратися з найскладнішими завданнями та виконати їх швидко та ефективно. Щоб обрати спецтехніку, тицніть по кнопці "Замовити", що знаходиться внизу карточки і заповніть форму.</p>
      {isLoading ? <Spinner /> : 
        <>
          <div className="list">
            {data.map((item, key) => (
              <Card
                key={key}
                name={item.name}
                description={item.description}
                photoUrl={item.photoUrl}
                price={item.price}
                handleClick={handleClick}
              />
            ))}
          </div>
        </>}
    </div>
  );
}

export default CardList;
