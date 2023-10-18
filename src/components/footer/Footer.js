import './footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <form className='footer__form'>
            <h3>Отримати консультацію</h3>
                <input placeholder='Ім&#39;я' />
                <input placeholder='Номер телефону' />
                <input placeholder='Текст повідомлення' />
                <input type='submit' />
            </form>      
        </footer>
    )
}

export default Footer;

