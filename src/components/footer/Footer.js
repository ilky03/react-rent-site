import Contacts from '../contacts/Contacts';

import './footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <Contacts />
            <form className='footer__form' onSubmit={e => e.preventDefault()}>
                <h3>Отримати консультацію</h3>
                <input name='name' placeholder='Ім&#39;я' />
                <input name='number' type='number' placeholder='Номер телефону' />
                <input name='text' placeholder='Текст повідомлення' />
                <input type='submit' />
            </form>      
        </footer>
    )
}

export default Footer;

