import TopSections from "../TopSections/TopSections"
import Card from '../Card/Card'
import React, { useState } from 'react';
import './Awards.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const Awards = () => {

    const cardsData = [
        {
            cardIcon: '/images/icons/icon13.png', CardTitle: 'Outstanding Early Childhood Education Awar',
            CardParagraph: 'Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academys commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.'
        },
        {
            cardIcon: '/images/icons/icon14.png', CardTitle: 'Innovative STEAM Education Award',
            CardParagraph: 'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.'
        },
        {
            cardIcon: '/images/icons/icon15.png', CardTitle: 'Environmental Stewardship Award',
            CardParagraph: 'Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.'
        },
    ]





    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const maxVisibleCards = window.innerWidth >= 1440 ? 3 : 1;
        if (currentIndex + maxVisibleCards < cardsData.length) {
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
            setCurrentIndex(cardsData.length - maxVisibleCards);
        }
    };

    return (

        <div className='awards-container'>
            <TopSections text={'Our Achievements'} title={'Our Awards and Recognitions'} subtitle={'Our Awards and Recognitions'} className='center' />
            <div className="awards-section">

                <div className="awards-wrapper">

                    <div className="awards-slider">
                        <div className="slider" style={{transform: `translateX(-${currentIndex * 100}%)`
                            }}
                        >
                            {cardsData.map((item, index) => (
                                <Card
                                    key={index}
                                    cardIcon={item.cardIcon}
                                    CardTitle={item.CardTitle}
                                    CardParagraph={item.CardParagraph}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="slider-bottom">
                        <p>8 More Awards</p>
                        <div  className="arrows-container">
                            <button className="nav-button prev-button" onClick={prevSlide}>
                            <FaLongArrowAltLeft size={30} />

                            </button>
                            <button className="nav-button next-button" onClick={nextSlide}>
                            <FaLongArrowAltRight size={30} />

                            </button>
                        </div>
                    </div>
                </div>
            </div>





        </div>

    )
}

export default Awards
