import { useState, useEffect } from 'react';

import Service from '../service/Service';

import './servicesList.scss';

function ServicesList({handleClick}) {
    return (
        <div id='services'>
            <h2>Послуги</h2>
            <p className='services__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, libero totam ullam officia incidunt repellat minima maiores iusto vel pariatur, debitis odio laborum facilis autem. Velit reiciendis totam qui iste.
            Animi temporibus inventore vel enim. Earum reiciendis nemo explicabo ex. Assumenda inventore voluptatem, nesciunt doloribus, placeat necessitatibus autem officiis quas accusantium debitis amet perspiciatis, incidunt doloremque? Temporibus dolorum odio fuga!</p>
            <div className='servicesList'>
                <View />
            </div>
            <button onClick={() => handleClick('services')}>Замовити послугу</button>
        </div>
    )
}

function View({handleClick}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://rent-site-a6109-default-rtdb.firebaseio.com/services.json');
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
    }, []);

    return (
        <>
            {data.map((item, key) => (
                <Service
                    key={key}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                />
            ))}
        </>
    );
}

export default ServicesList;