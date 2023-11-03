import { useState } from 'react';
import Banner from '../banner/Banner';

import './header.scss';

import logo from '../../source/img/logo.jpg'
import phone from '../../source/icons/phone_call.svg';

function Header({handleClick}) {
    const [burgerNavStatus, setBurgerNavStatus] = useState(false);
    const toggleBurgerNav = () => {
        setBurgerNavStatus(!burgerNavStatus);
    }
    return (
        <header className='app__header' id='main'>
            <nav className='app__nav'>
                <a href='#main' className='app__nav-logo'>
                    <img src={logo} alt='digger' />
                </a>
                <ul className='app__nav-link'>
                    <li><a href='#machinery'>Спецтехніка</a></li>
                    <li><a href='#services'>Послуги</a></li>
                    <li><a href='#contacts'>Контакти</a></li>
                </ul>
                <div className='app__nav-burger' onClick={toggleBurgerNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <button 
                    className='app__nav-btn'
                    onClick={() => handleClick('call')}>
                        <img src={phone} 
                            alt='phone' 
                            className='app__nav-call'/>
                        <p 
                            className='app__nav-text'>
                                Зв'язатися з нами
                        </p>
                </button>
                <ul 
                    className='app__nav-link burger-list' 
                    onClick={toggleBurgerNav}
                    style={{display: burgerNavStatus ? 'flex' : 'none'}}
                >
                    <li><a href='#machinery'>Спецтехніка</a></li>
                    <li><a href='#services'>Послуги</a></li>
                    <li><a href='#contacts'>Контакти</a></li>
                </ul>
            </nav>
            <Banner handleClick={handleClick}/>
        </header>
    )
}

export default Header;