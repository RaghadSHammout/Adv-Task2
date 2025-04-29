import './TopBanner.css';

const TopBanner = () => {
  return (
    <div className='top-banner'>
      <div className="banner-container">
        <img src="/images/top-banner-left.png" className='top-banner-left' alt="top-banner-left-shape" />
        <img src="/images/big-ball.png" className='big-ball' alt="big ball" width={72} />
        
        <div className="banner-text">
          <h2>
            Admission is Open, Grab your seat now
            <img src="/images/arrowRight.png" alt="arrow right" width={20} />
          </h2>
        </div>
        
        <img src="/images/small-ball.png" className='small-ball' alt="small ball" width={39} />
        <img src="/images/top-banner-right.png" className='top-banner-right' alt="top-banner-right-shape" />
      </div>
    </div>
  );
}

export default TopBanner;