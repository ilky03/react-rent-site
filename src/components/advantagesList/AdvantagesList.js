import './advantagesList.scss';

import clock from '../../source/icons/clock.svg';
import group from '../../source/icons/group.svg';
import engineering from '../../source/icons/engineering.svg';
import star from '../../source/icons/star.svg';

function AdvantagesList() {
    return (
        <div className='element-animation'>
            <h2 className='element-animation'>Переваги</h2>
            <div className='container'>
                <div className='advantList'>
                    <p className='element-animation'><img src={star} alt='star icon' /> {'>'}2 років досвіду</p>
                    <p className='element-animation'><img src={clock} alt='clock icon' /> Графік роботи 24/7</p>
                    <p className='element-animation'><img src={engineering} alt='engineering icon' /> Кваліфі-<br />кований персонал</p>
                    <p className='element-animation'><img src={group} alt='group icon' /> {'>'}100 клієнтів</p>
                </div>
            </div>
        </div>
    )
}

export default AdvantagesList;