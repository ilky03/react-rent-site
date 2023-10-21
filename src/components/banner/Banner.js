import './banner.scss';

function Banner() {
    return (
        <div className='banner__block'>
            <div className='banner__block-inner'>
                <h1>Оренда спецтехніки і надання послуг у Вінниці та області</h1>
                <a href='#machinery' className='banner__block-btn'>Обрати техніку</a>
                <a href='#services' className='banner__block-btn'>Обрати послугу</a>
            </div>
        </div>
    )
}

export default Banner;