import StatCard from './StatCard';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container ">
        <div className="hero-image-container">
          <img
            src="/images/hero-img.png"
            alt="Children learning"
            className="hero-image"
          />
        </div>

        <div className="hero-content">
          <p className="hero-subtitle">Welcome to Little Learner's Academy</p>
          <h1 className="hero-title">
            Where Young Minds Blossom and <span className="hero-title-accent">Dreams Take Flight.</span>
          </h1>
          <p className="hero-description">
            Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
          
          <div className="hero-stats">
            <StatCard number="+7000" text="Students Passed Out" />
            <StatCard number="+37" text="Awards & Recognitions" />
            <StatCard number="+15" text="Experience Educators" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
