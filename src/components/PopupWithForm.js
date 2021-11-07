function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen?"popup_opened":""}`} onClick={props.onClose}>
      <div className="popup__container">
        <button className="popup__close button" type="button" aria-label="Закрыть"></button>
        <form className="form" action="post" name={`form-${props.name}`} onSubmit={props.onSubmit} noValidate>
          <h2 className="form__title">{props.title}</h2>
          {props.fieldset}
          <button className="form__submit button" type="submit" data-waiting-text={props.buttonWaitingText}>{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
