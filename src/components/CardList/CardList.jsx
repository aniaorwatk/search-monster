import CardMonster from '../CardMonster/CardMonster';
import './CardList.css';

const CardList = ({ monsters }) => (
    <div className='card__list'>
        {monsters.map((monster) => {
            return <CardMonster key={monster.id} monster={monster} />;
        })}
    </div>
);

export default CardList;
