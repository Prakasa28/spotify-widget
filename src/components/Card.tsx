import "./Card.scss";

function Card({
  imageURL,
  title,
  description,
  handleClick,
}: {
  imageURL: string;
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick?: any;
}) {
  return (
    <div className="card" onClick={handleClick}>
      <div className="card__image-wrapper">
        <img className="card__image" src={imageURL} alt="album img" />
      </div>
      <div className="card__info">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
