import React, { useState } from 'react';
import './TestimonialSlider.css'
import TopSections from '../TopSections/TopSections'
import TestimonialCard from './TestimonialCard/TestimonialCard'

const testimonials = [
    {
        id: 1,
        image: '/images/testimonialsImages/person1.png',
        name: 'Jennifer B',
        rating: '/images/testimonialsImages/stars.png',
        message: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!',
    },
    {
        id: 2,
        image: '/images/testimonialsImages/person2.png',
        name: 'David K',
        rating: '/images/testimonialsImages/stars.png',
        message: 'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.',
    },
    {
        id: 3,
        image: '/images/testimonialsImages/person3.png',
        name: 'Emily L',
        rating: '/images/testimonialsImages/stars.png',
        message: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
        id: 4,
        image: '/images/testimonialsImages/person1.png',
        name: 'Sarah M',
        rating: '/images/testimonialsImages/stars.png',
        message: "My child's confidence and love for learning have grown so much since enrolling at Little Learners Academy."
    },
];
const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const maxVisibleCards = window.innerWidth >= 1440 ? 3 : 1;
        if (currentIndex + maxVisibleCards < testimonials.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); 
        }
    };

    const prevSlide = () => {
        const maxVisibleCards = window.innerWidth >= 1440 ? 3 : 1;
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(testimonials.length - maxVisibleCards); 
        }
    };

    return (
       <>
       <TopSections text={'Their Happy Words 🤗'} title={'Our Testimonials'} subtitle={'Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.'} />
        <div className="testimonials-section">
        
            <div className="testimonial-wrapper">
                <button className="nav-button prev-button" onClick={prevSlide}>
                    <img src="/images/testimonialsImages/arrowLeft.png" alt="Previous" />
                </button>

                <div className="testimonial-slider">
                    <div
                        className="slider"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-slide">
                                <TestimonialCard
                                    image={testimonial.image}
                                    name={testimonial.name}
                                    rating={testimonial.rating}
                                    message={testimonial.message}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button className="nav-button next-button" onClick={nextSlide}>
                    <img src="/images/testimonialsImages/arrowRight.png" alt="Next" />
                </button>
            </div>
        </div>
       </>
    );
}

export default TestimonialSlider
