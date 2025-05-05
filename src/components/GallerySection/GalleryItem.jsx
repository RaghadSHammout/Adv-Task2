import './Gallery.css';
import ImgSlider from './ImgSlider/ImgSlider';

const GalleryItem = ({ title, description, images }) => {
  return (
    <div className='gallery-item'>
      <ImgSlider images={images} />
      <div className="gallery-item-content">
        <h3 className="gallery-item-title">{title}</h3>
        <p className="gallery-item-description">{description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
