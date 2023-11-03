import { useState, useEffect } from 'react';

import Service from '../service/Service';
import Spinner from '../spinner/Spinner';

import useServices from '../../services/Services';
import './servicesList.scss';

function ServicesList({handleClick}) {
    return (
        <div id='services'>
            <h2>Послуги</h2>
            <p className='services__description'>Ми пропонуємо різноманітні послуги, спрямовані на забезпечення вашого комфорту та виконання різноманітних завдань. Наша мета - зробити ваше життя легшим та забезпечити вам доступ до надійних та професійних послуг. Щоб замовити послугу, ознайомтеся з наданим списком і за допомогою кнопки внизу "Замовити послугу" - зробіть замовлення.</p>
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