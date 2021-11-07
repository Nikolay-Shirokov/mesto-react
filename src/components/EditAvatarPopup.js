import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const inputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateAvatar(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      fieldset={(
        <fieldset className="form__fields">
          <label className="form__field">
            <input ref={inputRef} className="form__input" type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="form__input-error" data-input-name="link"></span>
          </label>
        </fieldset>
      )}
      buttonText="Сохранить"
      buttonWaitingText="Сохренение..."
    />
  );
}

export default EditAvatarPopup;
