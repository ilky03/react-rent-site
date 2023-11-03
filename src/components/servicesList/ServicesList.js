import { useState, useEffect } from 'react';

import Service from '../service/Service';
import Spinner from '../spinner/Spinner';

import useServices from '../../services/Services';
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
    const {fetchData, isLoading} = useServices();

    useEffect(() => {
      fetchData('services').then(data => setData(data));
    }, []);

    return (
        <>
            {isLoading ? <Spinner /> : 
            <>
                {data.map((item, key) => (
                    <Service
                        key={key}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </>}
        </> 
    );
}

export default ServicesList;