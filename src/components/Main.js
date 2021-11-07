import api from "../utils/api";
import { handleError } from "../utils/utils";
import { useState, useEffect, useContext } from "react";

import Card from "./Card";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {

  //Данные профиля
  const currentUser = useContext(CurrentUserContext);

  //Карточки
  const [cards, setCards] = useState([]);

  //Разовые действия при монтированнии/демонтировании компонента
  useEffect(() => {

    // Загрузка коллекции карточек с сервера
    api.getInitialCards()
      .then(data => {
        setCards(data);
      })
      .catch(handleError);

  }, []);

  function handleCardLike(card, isLiked) {
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.setStateLike(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  return (
    <main className="root__content">
      <section className="profile root__profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар нашего героя" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
          <p className="profile__position">{currentUser.about}</p>
        </div>
        <button className="profile__add-place button" type="button" aria-label="Добавить карточку места" onClick={props.onAddPlace}></button>
      </section>
      <section className="root__places">
        <ul className="places">
          {cards.map(card => <Card key={card._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} {...card} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;
