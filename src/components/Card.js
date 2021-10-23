function Card(props) {

  function handleClick() {
    props.onCardClick(props);
  }

  return (
    <li className="place" onClick={handleClick}>
      <img className="place__image" src={props.link} alt={props.name} />
      <h2 className="place__caption">{props.name}</h2>
      <button className="place__delete button" type="button" aria-label="Удалить" title="Удалить"></button>
      <div className="place__like-container">
        <button className="place__like button" type="button" aria-label="Нравится" title="Нравится"></button>
        <p className="place__like-counter">{props.likes.length}</p>
      </div>
    </li>
  );
}

export default Card;
