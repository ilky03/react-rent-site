import Card from '../card/Card';

import './cardList.scss';

function CardList() {
    return (
        <div id='machinery'>
            <h2>Спецтехніка</h2>
            <div className="list">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default CardList;