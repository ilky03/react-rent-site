import './contacts.scss';

import telegram from '../../source/icons/telegram.svg';
import mail from '../../source/icons/mail.svg';
import phone from '../../source/icons/phone.svg';

function Contacts() {
    return (
        <div className='contacts' id='contacts'>
            <h3>Контакти</h3>
            <a href='https://t.me/PATRIOT1902'><img src={telegram} alt='telegram' />Написати у Telegram</a>
            <a href='mailto:kovtun727@gmail.com'><img src={mail} alt='mail' />Написати на пошту</a>
            <a href='tel:+380971561837'><img src={phone} alt='phone' />+380-97-156-1837</a>
        </div>

    )
}

export default Contacts;