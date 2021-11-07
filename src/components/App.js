import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

import { useState, useEffect } from "react";
import { handleError } from "../utils/utils";
import api from "../utils/api";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {

    // Загрузка данных профиля с сервера
    api.getUserInfo()
      .then(data => {
        setCurrentUser(data);
      })
      .catch(handleError);

  }, []);

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

    setImagePopupOpen(false);

  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  return (
    <div className="wrapper">

      <CurrentUserContext.Provider value={currentUser}>

        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
