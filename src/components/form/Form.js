

import './form.scss';

function Form({isFormOpen, handleClick, type, choosedValue}) {

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
    return (
        <div className='form__block' style={formDisplay}>
            <form onSubmit={e => e.preventDefault()}>
                <h3>Замовлення {orderType}</h3>
                <label htmlFor='name'>Ваше ім'я</label>
                <input name='name' placeholder='Ім&#39;я' required />
                <label htmlFor='number'>Номер телефону</label>
                <input name='number' type='number' placeholder='Номер телефону' required />
                <label htmlFor='text'>{text}</label>
                <input name='text' placeholder={text} defaultValue={choosedValue} />
                <input type='submit' />
                <button onClick={handleClick}>Скасувати</button>
            </form>        
        </div>
    )
}

export default Form;