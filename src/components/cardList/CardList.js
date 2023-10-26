import { useEffect, useState } from 'react';

import Card from '../card/Card';

import './cardList.scss';

function CardList({ handleClick }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
        async function fetchData() {
            try {
                const response = await fetch('https://rent-site-a6109-default-rtdb.firebaseio.com/cards.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(Object.values(jsonData));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
      }

      fetchData();
    }
  }, [data]);

  return (
    <div id='machinery'>
      <h2>Спецтехніка</h2>
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
    </div>
  );
}

export default CardList;
