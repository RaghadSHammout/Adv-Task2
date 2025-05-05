import TopSections from '../TopSections/TopSections'
import './Hero2Card.css'


const Hero2Card = ({ heroTitle, heroText, topSectionProps }) => {
    return (
        <div className='hero-card'>
            <img src="/images/triangle.png" className='triangle' width={200} alt="triangle" />
            <div className="container">
                <div className='left-hero2'>
                    <TopSections {...topSectionProps}  className="left center" />
                    <h2 className='hero-title'>{heroTitle}</h2>
                </div>
                <p className='hero-text'>{heroText}</p>
            </div>
        </div>
    )
}

export default Hero2Card
