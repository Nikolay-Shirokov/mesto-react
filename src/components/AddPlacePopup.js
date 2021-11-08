import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const [nameValidity, setNameValidity] = useState({valid: true, message: ''});
  const [linkValidity, setLinkValidity] = useState({valid: true, message: ''});

  function setStateValidity(input, validityState, setValidityState) {
    const valid = input.validity.valid;
    const message = input.validationMessage;
    if (valid !== validityState.valid || message !== validityState.message) {
      setValidityState({valid, message})
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
    setStateValidity(event.target, nameValidity, setNameValidity);
  }

  function handleLinkChange(event) {
    setLink(event.target.value);
    setStateValidity(event.target, linkValidity, setLinkValidity);
  }

  function handleSubmit() {
    const result = props.onAddCard({
      name,
      link,
    });
    return result;
  }

  useEffect(() => {
    if (!props.isOpen) return;
    setName('');
    setLink('');
    setNameValidity({valid: false, message: ''});
    setLinkValidity({valid: false, message: ''});
  }, [props.isOpen])

  return (
    <PopupWithForm
      {...props}
      title="Новое место"
      name="add-place"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      fieldset={(
        <fieldset className="form__fields">
          <label className="form__field">
            <input value={name} onChange={handleNameChange} className={`form__input ${!nameValidity.message? '': 'form__input_type_error'}`} type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" />
            <span className={`form__input-error ${!nameValidity.message? '': 'form__input-error_visible'}`} data-input-name="name">{nameValidity.message}</span>
          </label>
          <label className="form__field">
            <input value={link} onChange={handleLinkChange} className={`form__input ${!linkValidity.message? '': 'form__input_type_error'}`} type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className={`form__input-error ${!linkValidity.message? '': 'form__input-error_visible'}`} data-input-name="link">{linkValidity.message}</span>
          </label>
        </fieldset>
      )}
      isButtonDisabled = {!(nameValidity.valid && linkValidity.valid)}
      buttonText="Создать"
      buttonWaitingText="Создание..."
    />
  );
}

export default AddPlacePopup;
