import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../../../components/Hero/Hero';
import HeroImg from '/images/hero-img.png';
import Benefits from '../../../components/Benefits/Benefits';
import FAQ from '../../../components/FAQ/FAQ';
import NavigateOurPage from '../../../components/NavigateOurPage/NavigateOurPage';
import Footer from '../../../components/Footer/Footer';
import TestimonialSlider from '../../../components/TestimonialSlider/TestimonialSlider';
import GalleryItem from '../../../components/GallerySection/GalleryItem';

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <div data-aos="fade-up">
                <Hero heroImg={HeroImg} />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
                <Benefits />
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
                <TestimonialSlider />
            </div>

            <div data-aos="fade-up" data-aos-delay="600">
                <FAQ />
            </div>

            <div data-aos="fade-up" data-aos-delay="800">
                <NavigateOurPage />
            </div>

        
        </>
    );
};

export default Home;
