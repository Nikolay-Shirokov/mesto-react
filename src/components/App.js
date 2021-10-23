import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div className="wrapper">

      <Header />
      <Main />
      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
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

      <PopupWithForm
        title="Новое место"
        name="add-place"
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

      <PopupWithForm
        title="Вы уверены?"
        name="accept"
        buttonText="Да"
      />

      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        fieldset={(
          <fieldset className="form__fields">
            <label className="form__field">
              <input className="form__input" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span className="form__input-error" data-input-name="link"></span>
            </label>
          </fieldset>
        )}
        buttonText="Сохранить"
        buttonWaitingText="Сохренение..."
      />

      <div className="popup" id="popup-picture">
        <div className="popup__container">
          <button className="popup__close button" type="button" aria-label="Закрыть"></button>
          <figure className="figure">
            <img className="figure__image" src="./images/yandex-praktikum.svg" alt="Логотип Яндекс.Практикум" />
            <figcaption className="figure__caption">Яндекс.Практикум</figcaption>
          </figure>
        </div>
      </div>

    </div>
  );
}

export default App;
