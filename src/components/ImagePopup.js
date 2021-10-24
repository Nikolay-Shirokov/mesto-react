function ImagePopup(props) {
  return (
    <div className={`popup ${props.isOpen?"popup_opened":""}`} onClick={props.onClose}>
      <div className="popup__container">
        <button className="popup__close button" type="button" aria-label="Закрыть"></button>
        <figure className="figure">
          <img className="figure__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="figure__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
