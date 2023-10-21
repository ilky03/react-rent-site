import './advantagesList.scss';

import clock from '../../source/icons/clock.svg';
import group from '../../source/icons/group.svg';
import engineering from '../../source/icons/engineering.svg';
import star from '../../source/icons/star.svg';

function AdvantagesList() {
    return (
        <div>
            <h2>Переваги</h2>
            <div className='container'>
                <div className='advantList'>
                    <p><img src={star} alt='star icon' /> {'>'}5 років досвіду</p>
                    <p><img src={clock} alt='clock icon' /> Графік роботи 24/7</p>
                    <p><img src={engineering} alt='engineering icon' /> Кваліфі-<br />кований персонал</p>
                    <p><img src={group} alt='group icon' /> {'>'}5000 клієнтів</p>
                </div>
            </div>
        </div>
    )
}

export default AdvantagesList;