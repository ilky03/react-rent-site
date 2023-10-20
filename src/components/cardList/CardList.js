import Card from '../card/Card';

import './cardList.scss';

function CardList() {
    return (
        <div id='machinery'>
            <h2>Спецтехніка</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit facere consequatur quam repudiandae animi recusandae, ab ad obcaecati suscipit doloremque soluta pariatur architecto accusamus eius voluptatibus error dolor nostrum in.
            Ad culpa ipsam alias, molestiae vitae aliquid non officiis? Consectetur, enim! Quidem ipsam facere nesciunt quae a recusandae, sunt consequuntur? Unde quam blanditiis illum, culpa quod reprehenderit excepturi cupiditate! Voluptates.</p>
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