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
