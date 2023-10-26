import { useState, useEffect } from 'react';

import './form.scss';

function Form({isFormOpen, handleClick, type, choosedValue}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        if (data.length === 0) {
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
        }

        
    }, [data]);

    const formDisplay = {'display': isFormOpen ? 'flex' : 'none'}; 
    let orderType, text;
    console.log(choosedValue)
    if (type==='services') {
        orderType = 'послуги';
        text = 'Обрана послуга';
    } else if (type==='card') {
        orderType = 'техніки';
        text = 'Обрана спецтехніка';
    } else {
        orderType = 'зворотнього дзвінку';
        text = 'Коментар'; 
    }
    return (
        <div className='form__block' style={formDisplay}>
            <form onSubmit={e => e.preventDefault()}>
                <h3>Замовлення {orderType}</h3>
                <label htmlFor='name'>Ваше ім'я</label>
                <input name='name' placeholder='Уведіть ім&#39;я' required />
                <label htmlFor='number'>Номер телефону</label>
                <input name='number' type='number' placeholder='Уведіть номер телефону' required />
                <label htmlFor='text'>{text}</label>
                {type === 'services' ? 
                    (<select name='service'>
                        {data.map((item) => <option>{item.name}</option>)}
                    </select>) :
                    <input name='text' placeholder={text} defaultValue={choosedValue} />
                }
                <input type='submit' />
                <button onClick={() => handleClick(null, null)}>Скасувати</button>
            </form>        
        </div>
    )
}

export default Form;