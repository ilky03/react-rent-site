import './banner.scss';
import arrow from '../../source/icons/arrow.svg';

function Banner({ handleClick }) {
    return (
        <div className='banner__block'>
            <div className='banner__block-inner element-animation'>
                <h1 className='element-animation'>Оренда спецтехніки і надання послуг у Вінниці та області</h1>
                <a href='#machinery' className='banner__block-btn'>Обрати техніку</a>
                <a href='#services' className='banner__block-btn'>Обрати послугу</a>
                <button className='banner__block-btn' onClick={() => handleClick('partner')}>Партнерство</button>
            </div>
            <img src={arrow} alt='arrow' className='arrow element-animation'/>
        </div>
    )
}

export default Banner; 

