import './TopSections.css'
const TopSections = ({text , title , subtitle, className }) => {
  return (
    <>
      <div className={`top-sections ${className}`}>
        <p>{text}</p>
      </div>
      <div className='title-sub-title-container'>
        <h2 className='title'>{title}</h2>
        <p className='sub-title'>{subtitle}</p>
      </div>
    </>
  );
};

export default TopSections
