import './banner.scss';

function Banner() {
    return (
        <div className='banner__block'>
            <div className='banner__block-inner'>
                <h1>Оренда спецтехніки і надання послуг у Вінниці та області</h1>
                <button className='banner__block-btn'>Обрати техніку</button>
                <button className='banner__block-btn'>Обрати послугу</button>
            </div>
        </div>
    )
}

export default Banner;