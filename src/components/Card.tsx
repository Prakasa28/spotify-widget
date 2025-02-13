function Card({
  imageURL,
  title,
  description,
  handleClick,
}: {
  imageURL: string;
  title: string;
  description: string;
  handleClick?: any;
}) {
  return (
    <>
      <div style={{ display: "flex" }} onClick={handleClick}>
        <img src={imageURL} alt="album img" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Card;
