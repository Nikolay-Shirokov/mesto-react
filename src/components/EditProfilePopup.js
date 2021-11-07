import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={props.isEditProfilePopupOpen}
      onClose={props.closeAllPopups}
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
  );
}

export default EditProfilePopup;
