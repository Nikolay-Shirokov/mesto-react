import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddCard({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-place"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      fieldset={(
        <fieldset className="form__fields">
          <label className="form__field">
            <input value={name} onChange={handleNameChange} className="form__input" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
            <span className="form__input-error" data-input-name="name"></span>
          </label>
          <label className="form__field">
            <input value={link} onChange={handleLinkChange} className="form__input" type="url" name="link" placeholder="Ссылка на картинку" required />
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
