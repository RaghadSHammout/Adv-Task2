import './Card.css';
import rectangle from '/images/rectangle.png'
const Card = ({ cardIcon, CardTitle, CardParagraph, subjectCard ,mvCard}) => {
  console.log("Card rendered", { CardTitle });

  return (
<div className={`card ${subjectCard} ${mvCard}`}>
  {mvCard === 'mv-card' ? (
    <div className="text-container">
      <div className="title-with-icon">
        <h3>{CardTitle}</h3>
        <img src={cardIcon} className='card-img' alt="icon" />
      </div>
      <p>{CardParagraph}</p>
    </div>
  ) : (
    <>
      <div className="img-container">
        <img src={cardIcon} className='card-img' alt="icon" />
        <img src={rectangle} className='rectangle' alt="rectangle-shape" />
      </div>
      <div className="text-container">
        <h3>{CardTitle}</h3>
        <p>{CardParagraph}</p>
      </div>
    </>
  )}
</div>

  );
};

export default Card;