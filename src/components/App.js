function App() {
  return (
    <div className="root">
      <header className="header">
        <a href="#" className="header__logo" aria-label="Перейти на главную"></a>
      </header>

      <main className="root__content">
        <section className="profile root__profile">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src="./images/avatar.webp" alt="Аватар нашего героя"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Коля Широков</h1>
            <button className="profile__edit button" type="button" aria-label="Редактировать профиль"></button>
            <p className="profile__position">Студент</p>
          </div>
          <button className="profile__add-place button" type="button" aria-label="Добавить карточку места"></button>
        </section>
        <section className="root__places">
          <ul className="places">
            <template id="place">
              <li className="place">
                <img className="place__image" src="https://svgsilh.com/svg/1363011.svg" alt="Изображение"/>
                <h2 className="place__caption">Название</h2>
                <button className="place__delete button" type ="button" aria-label="Удалить" title="Удалить"></button>
                <div className="place__like-container">
                <button className="place__like button" type ="button" aria-label="Нравится" title="Нравится"></button>
                <p className="place__like-counter">0</p>
                </div>
              </li>
            </template>
          </ul>
        </section>
      </main>

      <footer className="footer root__footer">
        <p className="footer__copyright">&copy; 2021 Николай Широков</p>
      </footer>

      <div className="popup" id="popup-edit-profile">
        <div className="popup__container">
          <button className="popup__close button" type="button" aria-label="Закрыть"></button>
          <form className="form" action="post" name="form-edit-profile" novalidate>
            <h2 className="form__title">Редактировать профиль</h2>
            <fieldset className="form__fields">
              <label className="form__field">
                <input className="form__input" type="text" name="name" placeholder="Имя героя" required minlength="2" maxlength="40"/>
                <span className="form__input-error" data-input-name="name"></span>
              </label>
              <label className="form__field">
                <input className="form__input" type="text" name="about" placeholder="Позиция героя в мире" required minlength="2" maxlength="200"/>
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
          <form className="form" action="post" name="form-add-place" novalidate>
            <h2 className="form__title">Новое место</h2>
            <fieldset className="form__fields">
              <label className="form__field">
                <input className="form__input" type="text" name="name" placeholder="Название" required minlength="2" maxlength="30"/>
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
          <form className="form" action="post" name="form-accept" novalidate>
            <h2 className="form__title">Вы уверены?</h2>
            <button className="form__submit button" type="submit">Да</button>
          </form>
        </div>
      </div>

      <div className="popup" id="popup-edit-avatar">
        <div className="popup__container">
          <button className="popup__close button" type="button" aria-label="Закрыть"></button>
          <form className="form" action="post" name="form-edit-avatar" novalidate>
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
