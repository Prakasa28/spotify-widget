import "./Card.scss";

interface CardProps {
  imageURL: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

function Card({ imageURL, title, description, handleClick }: CardProps) {
  return (
    <div className="card" onClick={handleClick}>
      <div className="card__image-wrapper">
        <img className="card__image" src={imageURL} alt="album img" />
      </div>
      <div className="card__info">
        <h2 className="card__title">
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h2>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
