import { useState, useEffect, useRef } from 'react';

import './form.scss';
import Spinner from '../spinner/Spinner';

function Form({isFormOpen, handleClick, type, choosedValue}) {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const formRef = useRef(null);

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

    useEffect(() => {
        if (isFormOpen) {
            document.body.classList.add('body-no-scroll');
        } else {
            document.body.classList.remove('body-no-scroll');
        }
    
        return () => {
            document.body.classList.remove('body-no-scroll');
        };
    }, [isFormOpen]);
    

    const handleClickOutside = (e) => {
        const formElement = document.querySelector('.form');
        if (formElement && !formElement.contains(e.target)) {
            handleClick(null, null);
        }
    }

    const postData = async (e) => {
        setLoading(true);
        e.preventDefault()
        let formData = new FormData(formRef.current);
        let json = JSON.stringify(Object.fromEntries(formData.entries()));
        let res = await fetch('https://rent-site-a6109-default-rtdb.firebaseio.com/forms.json', {
            method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: json
            });
        return await res.json(); 
    }

    const formDisplay = {'display': isFormOpen ? 'flex' : 'none'}; 
    let orderType, text;
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

    const SuccessInfo = () => {
        return (
            <div className='success-info'>
                <h3>ДЯКУЄМО, заявка успішно надіслана!</h3>
                <p>Ми зв'яжемося з Вами найближчим часом</p>
                <button 
                    className='success-info__btn' 
                    onClick={() => {
                        setSuccess(false); 
                        handleClick(null, null)
                    }}> 
                    Повернутися на сайт
                </button>
            </div>
        )
    }

    const FormFilling = () => {
        return (
            type === 'partner' ?
            <form onSubmit={e => handleSubmit(e)} className='form' ref={formRef}>
                <h3 style={{marginBottom: '30px'}}>Форма для співпраці</h3>
                <label htmlFor='name'>Ваше ім'я</label>
                <input name='name' placeholder='Уведіть ім&#39;я' required />
                <label htmlFor='number'>Номер телефону</label>
                <input name='number' placeholder='Уведіть номер телефону' required />
                <label htmlFor='district'>Зона надання послуг/спецтехніки</label>
                <select name='district' required>
                    <option selected value="" disabled>Оберіть район із списку</option>
                    <option>Вінницький район</option>
                    <option>Гайсинський район</option>
                    <option>Жмеринський район</option>
                    <option>Могилів-Подільський район</option>
                    <option>Тульчинський район</option>
                    <option>Хмільницький район</option>
                </select>
                <label htmlFor='offers'>Вид послуг/спецтехніки</label>
                <textarea name='offers' placeholder='Уведіть свої пропозиції' />
                <input type='submit' value='Надіслати' />
                <button onClick={() => handleClick(null, null)}>Скасувати</button>
            </form> :
            <form onSubmit={e => handleSubmit(e)} className='form' ref={formRef}>
                <h3 style={{marginBottom: '30px'}}>Замовлення {orderType}</h3>
                <label htmlFor='name'>Ваше ім'я</label>
                <input name='name' placeholder='Уведіть ім&#39;я' required />
                <label htmlFor='number'>Номер телефону</label>
                <input name='number' placeholder='Уведіть номер телефону' required />
                {type === 'services' || choosedValue ?
                    <>
                        <label htmlFor='district'>Назва району</label>
                        <select name='district' required>
                            <option selected value="" disabled>Оберіть район із списку</option>
                            <option>Вінницький район</option>
                            <option>Гайсинський район</option>
                            <option>Жмеринський район</option>
                            <option>Могилів-Подільський район</option>
                            <option>Тульчинський район</option>
                            <option>Хмільницький район</option>
                        </select>
                        <label htmlFor='town'>Назва населеного пункту</label>
                        <input name='town' placeholder='Уведіть назву пункту' required />
                    </> : null}
                <label htmlFor='text'>{text}</label>
                {type === 'services' ? 
                    (<select name='text' required>
                        <option selected value="" disabled>Оберіть послугу із списку</option>
                        {data.map((item) => <option key={item.name}>{item.name}</option>)}
                    </select>) :
                    <textarea name='text' placeholder={text} defaultValue={choosedValue ? 'Оренда спецтехніки. ' + choosedValue : choosedValue} />
                }
                <input type='submit' value='Надіслати' />
                <button onClick={() => handleClick(null, null)}>Скасувати</button>
            </form>
        )
    }

    const handleSubmit = (e) => {
        postData(e).then(() => {
            setLoading(false); setSuccess(true)
        })
    }

    return (
        <div className='form__block element-animation' style={formDisplay} onClick={(e) => handleClickOutside(e)}>
            {loading ? <Spinner /> :
                success ? <SuccessInfo /> : 
                    <FormFilling />
            }      
        </div>
    )
}

export default Form;