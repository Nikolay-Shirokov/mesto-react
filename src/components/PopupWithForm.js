import { useState } from "react";

function PopupWithForm(props) {

  const [buttonText, setButtonText] = useState(props.buttonText)

  function handleSubmitForm(event) {
    event.preventDefault();
    if (!props.onSubmit) {
      return;
    }
    setButtonText(props.buttonWaitingText ? props.buttonWaitingText : props.buttonText);
    const result = props.onSubmit(event);
    if (result instanceof Promise) {
      result.finally(res => setButtonText(props.buttonText));
    }
  }

  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`} onClick={props.onClose}>
      <div className="popup__container">
        <button className="popup__close button" type="button" aria-label="Закрыть"></button>
        <form className="form" action="post" name={`form-${props.name}`} onSubmit={handleSubmitForm} noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.fieldset}
          <button className="form__submit button" type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
