// Card.jsx
import style from './card.module.css';

const Card = ({ image, title, text }) => {
  return (
    <div className={style.cardContainer}>
      <img className={style.imageContainer} src={image} alt={title} />
      <div className={style.textContainer}>
        <h2 className={style.cardTitle}>{title}</h2>
        <p className={style.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default Card;