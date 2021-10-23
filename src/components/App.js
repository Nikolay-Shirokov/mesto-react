import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Main />

      <Footer />

      <div className="popup" id="popup-edit-profile">
        <div className="popup__container">
          <button className="popup__close button" type="button" aria-label="Закрыть"></button>
          <form className="form" action="post" name="form-edit-profile" noValidate>
            <h2 className="form__title">Редактировать профиль</h2>
            <fieldset className="form__fields">
              <label className="form__field">
                <input className="form__input" type="text" name="name" placeholder="Имя героя" required minLength="2" maxLength="40"/>
                <span className="form__input-error" data-input-name="name"></span>
              </label>
              <label className="form__field">
                <input className="form__input" type="text" name="about" placeholder="Позиция героя в мире" required minLength="2" maxLength="200"/>
                <span className="form__input-error" data-input-name="about"></span>
              </label>
            </fieldset>
            <button className="form__submit button" type="submit" data-waiting-text="Сохренение...">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup" id="popup-add-place">
        <div className="popup__container">
          <button className="popup__close button" type="button" aria-label="Закрыть"></button>
          <form className="form" action="post" name="form-add-place" noValidate>
            <h2 className="form__title">Новое место</h2>
            <fieldset className="form__fields">
              <label className="form__field">
                <input className="form__input" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30"/>
                <span className="form__input-error" data-input-name="name"></span>
              </label>
              <label className="form__field">
                <input className="form__input" type="url" name="link" placeholder="Ссылка на картинку" required/>
                <span className="form__input-error" data-input-name="link"></span>
              </label>
            </fieldset>
            <button className="form__submit button" type="submit" data-waiting-text="Создание...">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup" id="popup-picture">
        <div className="popup__container">
          <button className="popup__close button" type="button" aria-label="Закрыть"></button>
          <figure className="figure">
            <img className="figure__image" src="./images/yandex-praktikum.svg" alt="Логотип Яндекс.Практикум"/>
            <figcaption className="figure__caption">Яндекс.Практикум</figcaption>
          </figure>
        </div>
      </div>

      <div className="popup" id="popup-accept">
        <div className="popup__container">
          <button className="popup__close button" type="button" aria-label="Закрыть"></button>
          <form className="form" action="post" name="form-accept" noValidate>
            <h2 className="form__title">Вы уверены?</h2>
            <button className="form__submit button" type="submit">Да</button>
          </form>
        </div>
      </div>

      <div className="popup" id="popup-edit-avatar">
        <div className="popup__container">
          <button className="popup__close button" type="button" aria-label="Закрыть"></button>
          <form className="form" action="post" name="form-edit-avatar" noValidate>
            <h2 className="form__title">Обновить аватар</h2>
            <fieldset className="form__fields">
              <label className="form__field">
                <input className="form__input" type="url" name="link" placeholder="Ссылка на картинку" required/>
                <span className="form__input-error" data-input-name="link"></span>
              </label>
            </fieldset>
            <button className="form__submit button" type="submit" data-waiting-text="Сохренение...">Сохранить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
