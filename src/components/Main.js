import api from "../utils/api";
import React from "react";

import initialUserAvatar from "../images/avatar.webp";

function Main(props) {

  const [userName, setUserName] = React.useState('Коля Широков');
  const [userDescription, setUserDescription] = React.useState('Студент');
  const [userAvatar, setUserAvatar] = React.useState(initialUserAvatar);

  React.useEffect(() => {
    api.getUserInfo().then(data => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
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
          <template id="place">
            <li className="place">
              <img className="place__image" src="https://svgsilh.com/svg/1363011.svg" alt="Изображение" />
              <h2 className="place__caption">Название</h2>
              <button className="place__delete button" type="button" aria-label="Удалить" title="Удалить"></button>
              <div className="place__like-container">
                <button className="place__like button" type="button" aria-label="Нравится" title="Нравится"></button>
                <p className="place__like-counter">0</p>
              </div>
            </li>
          </template>
        </ul>
      </section>
    </main>
  );
}

export default Main;
