function ImagePopup(props) {
  return (
    <div className="popup" id="popup-picture">
      <div className="popup__container">
        <button className="popup__close button" type="button" aria-label="Закрыть"></button>
        <figure className="figure">
          <img className="figure__image" src="./images/yandex-praktikum.svg" alt="Логотип Яндекс.Практикум" />
          <figcaption className="figure__caption">Яндекс.Практикум</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
