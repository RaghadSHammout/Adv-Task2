import './BenfitsCard.css';

const BenfitsCard = ({ cardIcon, benfitsCardTitle, benfitsCardParagraph }) => {
  return (
    <div className='benfits-card'>
      <div className="icon-container">
        <img src={cardIcon} alt="icon" />
      </div>
      <h3>{benfitsCardTitle}</h3>
      <p>{benfitsCardParagraph}</p>
    </div>
  );
};

export default BenfitsCard;