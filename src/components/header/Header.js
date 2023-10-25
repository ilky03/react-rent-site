import Banner from '../banner/Banner';

import './header.scss';

import logo from '../../source/img/logo.png';
import smallLogo from '../../source/img/logo_small.png';
import phone from '../../source/icons/phone_call.svg';

function Header({handleClick}) {
    return (
        <header className='app__header'>
            <nav className='app__nav'>
            <img src={logo} className='app__nav-logo' height='80px'alt='digger' />
            <img src={smallLogo} className='app__nav-smallLogo' height='80px'alt='digger' />
                <ul className='app__nav-link'>
                    <li><a href='#machinery'>Спецтехніка</a></li>
                    <li><a href='#services'>Послуги</a></li>
                    <li><a href='#contacts'>Контакти</a></li>
                </ul>
                <div className='app__nav-burger'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <button 
                    className='app__nav-btn'
                    onClick={handleClick}>
                        <img src={phone} 
                            alt='phone' 
                            className='app__nav-call'/>
                        <p 
                            className='app__nav-text'>
                                Зв'язатися з нами
                        </p>
                </button>
            </nav>
            <Banner />
        </header>
    )
}

export default Header;