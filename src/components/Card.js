import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(card) {

  //Данные профиля
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  function handleClick() {
    card.onCardClick(card);
  }

  return (
    <li className="place">
      <img className="place__image" src={card.link} alt={card.name} title={`Добавил ${card.owner.name}`} onClick={handleClick} />
      <h2 className="place__caption">{card.name}</h2>
      {isOwn? <button className="place__delete button" type="button" aria-label="Удалить" title="Удалить"></button>: ''}
      <div className="place__like-container">
        <button className="place__like button" type="button" aria-label="Нравится" title="Нравится"></button>
        <p className="place__like-counter">{card.likes.length}</p>
      </div>
    </li>
  );
}

export default Card;
