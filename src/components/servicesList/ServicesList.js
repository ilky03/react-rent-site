import { useState, useEffect } from 'react';

import Service from '../service/Service';
import Spinner from '../spinner/Spinner';

import useDB from '../../services/useDB';
import './servicesList.scss';

function ServicesList({ handleClick, handleLoaded}) {
    return (
        <div id='services' className='element-animation'>
            <h2 className='element-animation'>Послуги</h2>
            <p className='services__description element-animation'>Ми пропонуємо різноманітні послуги, спрямовані на забезпечення вашого комфорту та виконання різноманітних завдань. Наша мета - зробити ваше життя легшим та забезпечити вам доступ до надійних та професійних послуг. Щоб замовити послугу, ознайомтеся з наданим списком і за допомогою кнопки внизу "Замовити послугу" - зробіть замовлення.</p>
            <div className='servicesList element-animation'>
                <View handleLoaded={handleLoaded} />
            </div>
            <button className='element-animation' onClick={() => handleClick('services')}>Замовити послугу</button>
        </div>
    )
}

function View({ handleLoaded }) {
    const [data, setData] = useState([]);
    const {fetchData, isLoading} = useDB();

    useEffect(() => {
      fetchData('services').then(data => setData(data)).finally(()=>handleLoaded('a'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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