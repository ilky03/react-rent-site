function Service({name, description, price}) {
    return (
        <div className='element-animation'>
            <h4>{name}</h4>
            <p className='servicesList__price'>{price}</p>
            <p className='servicesList__descr'>{description}</p>
        </div>
    )
}

export default Service;