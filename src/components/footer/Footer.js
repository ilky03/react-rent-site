import { useState, useRef } from 'react';

import Contacts from '../contacts/Contacts';

import './footer.scss';

function Footer() {
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);

    const postData = async (e) => {
        setIsLoading(true);
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
    const handleSubmit = (e) => {
        postData(e).then(() => {
            setIsLoading(false); alert('Дякуємо, ми скоро вам зателефонуємо!')
        })
    }
    return (
        <footer className='footer'>
            <Contacts />
            <form className='footer__form' onSubmit={e => handleSubmit(e)} ref={formRef}>
                <h3>Отримати консультацію</h3>
                <input name='name' placeholder='Ім&#39;я' required/>
                <input name='number' placeholder='Номер телефону' required/>
                <input name='text' placeholder='Текст повідомлення' />
                <input type='submit' value='Надіслати' disabled={isLoading ? true : false} />
            </form>      
        </footer>
    )
}

export default Footer;

