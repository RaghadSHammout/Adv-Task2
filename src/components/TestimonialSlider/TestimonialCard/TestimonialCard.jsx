const TestimonialCard = ({ image, name, rating, message }) => {
  return (
    <div className="testimonial-card">
      <div className="avatar-container">
        <img className="testimonial-avatar" src={image} alt={name} />
      </div>
      <h3 className="testimonial-name">{name}</h3>
      <img className="testimonial-rating" src={rating} alt="rating" />
      <p className="testimonial-message">{message}</p>
    </div>
  );
};

export default TestimonialCard;