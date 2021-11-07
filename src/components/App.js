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
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
/* import { Route, Routes } from "react-router-dom"; */

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
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
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

  function handleUpdateUser(newUserInfo) {
    return api.patchUserInfo(newUserInfo)
      .then(res => {
        setCurrentUser(res);
        setEditProfilePopupOpen(false);
      })
      .catch(handleError)
  }

  function handleUpdateAvatar(newLink) {
    return api.patchAvatar(newLink)
      .then(res => {
        setCurrentUser(res);
        setEditAvatarPopupOpen(false);
      })
      .catch(handleError)
  }

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
    api.setStateLike(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(handleError);
  }

  function handleCardDelete(card) {

    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(handleError);
  }

  function handleAddCard(newCardData) {
    return api.postCard(newCardData)
      .then(newCard => {
        setCards([newCard, ...cards]);
        setAddPlacePopupOpen(false);
      })
      .catch(handleError)
  }

  return (
    <div className="wrapper">

      <CurrentUserContext.Provider value={currentUser}>
{/*         <Routes>
          <Route exact path="/"> */}

            <Header />

            <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              cards={cards}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />

            <Footer />

            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />

            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddCard={handleAddCard}
            />

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
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
{/*
          </Route>
        </Routes> */}
      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;
