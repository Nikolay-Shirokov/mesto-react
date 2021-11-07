import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      title="Новое место"
      name="add-place"
      isOpen={props.isOpen}
      onClose={props.onClose}
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
  );
}

export default AddPlacePopup;
