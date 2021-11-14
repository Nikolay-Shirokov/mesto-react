import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  const currentUser = useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    if (currentUser.name) {
      setName(currentUser.name);
      setAbout(currentUser.about);
    }
  }, [currentUser]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAboutChange(event) {
    setAbout(event.target.value);
  }

  function handleSubmit() {
    // Передаём значения управляемых компонентов во внешний обработчик
    const result = props.onUpdateUser({
      name,
      about,
    });
    return result;
  }

  return (
    <PopupWithForm
      {...props}
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      buttonWaitingText="Сохранение..."
    >
      <fieldset className="form__fields">
        <label className="form__field">
          <input value={name} onChange={handleNameChange} className="form__input" type="text" name="name" placeholder="Имя героя" required minLength="2" maxLength="40" />
          <span className="form__input-error" data-input-name="name"></span>
        </label>
        <label className="form__field">
          <input value={about} onChange={handleAboutChange} className="form__input" type="text" name="about" placeholder="Позиция героя в мире" required minLength="2" maxLength="200" />
          <span className="form__input-error" data-input-name="about"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
