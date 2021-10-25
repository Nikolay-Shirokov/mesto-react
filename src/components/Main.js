import api from "../utils/api";
import { handleError } from "../utils/utils";
import React from "react";

import Card from "./Card";

import initialUserAvatar from "../images/avatar.webp";

function Main(props) {

  //Данные профиля
  const [userName, setUserName] = React.useState('Инкогнито');
  const [userDescription, setUserDescription] = React.useState('Неизвестный посетитель');
  const [userAvatar, setUserAvatar] = React.useState(initialUserAvatar);

  //Карточки
  const [cards, setCards] = React.useState([]);

  //Разовые действия при монтированнии/демонтировании компонента
  React.useEffect(() => {

    // Загрузка данных профиля с сервера
    api.getUserInfo()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(handleError);

    // Загрузка коллекции карточек с сервера
    api.getInitialCards()
      .then(data => {
        setCards(data);
      })
      .catch(handleError);

  }, []);

  return (
    <main className="root__content">
      <section className="profile root__profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Аватар нашего героя" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
          <p className="profile__position">{userDescription}</p>
        </div>
        <button className="profile__add-place button" type="button" aria-label="Добавить карточку места" onClick={props.onAddPlace}></button>
      </section>
      <section className="root__places">
        <ul className="places">
          {cards.map(card => <Card key={card._id} onCardClick={props.onCardClick} {...card} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;
