import './contacts.scss';

import telegram from '../../source/icons/telegram.svg';
import mail from '../../source/icons/mail.svg';
import phone from '../../source/icons/phone.svg';
import map from '../../source/icons/map.svg';

function Contacts() {
    return (
        <div className='contacts' id='contacts'>
            <h3>Контакти</h3>
            <p><img src={telegram} alt='telegram' />tg.me/randomlink</p>
            <p><img src={mail} alt='mail' />somemail@gmail.com</p>
            <p><img src={phone} alt='phone' />+380-99-444-2333</p>
            <p><img src={map} alt='map' />Наше місцеположення</p>
        </div>

    )
}

export default Contacts;