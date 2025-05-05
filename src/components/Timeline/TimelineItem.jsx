const TimelineItem = ({ year, title, description, isLast }) => {



  
  return (
    <div className="timeline-item">
      <div className="timeline-line-container">
        <div className="timeline-dot-container">
          <div className="timeline-dot-outer">
            <div className="timeline-dot-inner"></div>
          </div>
        </div>
        {!isLast && <div className="timeline-line"></div>}
      </div>
      <div className="timeline-content">
        <div className="connector-line"></div>
        <div className="timeline-dot-container">
          <div className="timeline-dot-outer">
            <div className="timeline-dot-inner"></div>
          </div>
        </div>
        <div className="timeline-year">
        <img src="/images/squares.png" className="timeline-year-img" alt="squares" width={60} />
          <span className="year-text">{year}</span>
        </div>
        <div className="timeline-text">
          <h2 className="timeline-title">{title}</h2>
          <p className="timeline-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
