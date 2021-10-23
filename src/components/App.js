import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import React from "react";

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setAddPlacePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setEditProfilePopupOpen(true);
  }

  function closeAllPopups(event) {

    if (!(event.target === event.currentTarget || event.target.classList.contains('popup__close'))) {
      return;
    };

    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);

    setSelectedCard({});

  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="wrapper">

      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        fieldset={(
          <fieldset className="form__fields">
            <label className="form__field">
              <input className="form__input" type="text" name="name" placeholder="Имя героя" required minLength="2" maxLength="40" />
              <span className="form__input-error" data-input-name="name"></span>
            </label>
            <label className="form__field">
              <input className="form__input" type="text" name="about" placeholder="Позиция героя в мире" required minLength="2" maxLength="200" />
              <span className="form__input-error" data-input-name="about"></span>
            </label>
          </fieldset>
        )}
        buttonText="Сохранить"
        buttonWaitingText="Сохранение..."
      />

      <PopupWithForm
        title="Новое место"
        name="add-place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        fieldset={(
          <fieldset className="form__fields">
            <label className="form__field">
              <input className="form__input" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
              <span className="form__input-error" data-input-name="name"></span>
            </label>
            <label className="form__field">
              <input className="form__input" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span className="form__input-error" data-input-name="link"></span>
            </label>
          </fieldset>
        )}
        buttonText="Создать"
        buttonWaitingText="Создание..."
      />

      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        fieldset={(
          <fieldset className="form__fields">
            <label className="form__field">
              <input className="form__input" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span className="form__input-error" data-input-name="link"></span>
            </label>
          </fieldset>
        )}
        buttonText="Сохранить"
        buttonWaitingText="Сохренение..."
      />

      <PopupWithForm
        title="Вы уверены?"
        name="accept"
        buttonText="Да"
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
