import Banner from '../banner/Banner';

import './header.scss';

function Header() {
    return (
        <header className='app__header'>
            <nav className='app__nav'>
                <ul className='app__nav-link'>
                    <li><a href='#machinery'>Спецтехніка</a></li>
                    <li><a href='#services'>Послуги</a></li>
                    <li><a href='#contacts'>Контакти</a></li>
                </ul>
            </nav>
            <Banner />
        </header>
    )
}

export default Header;