import './Footer.css';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";




const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-section logo-section">
                    <img src="/public/images/logo-footer.png" alt="logo" height={40} />
                    <p className="footer-description">
                        We believe in the power of play to foster creativity, problem-solving skills, and imagination.
                    </p>
                    <div className="footer-contact">
                        <div className="contact-item">
                            <span className='icon'><MdEmail size={24} />
                            </span>
                            <span className='contact-info'>hello@littlelearners.com</span>
                        </div>
                        <div className="contact-item">
                            <span className='icon'><FaPhone size={24} /></span>
                            <span className='contact-info'>+91 91813 23 2309</span>
                        </div>
                        <div className="contact-item">
                            <span className='icon'><FaLocationDot size={24} />
                            </span >
                            <span className='contact-info'>Somewhere in the World</span>
                        </div>
                    </div>
                </div>

                <div className="footer-section links-section">
                    <h4>Home</h4>
                    <a href="#">Features</a>
                    <a href="#">Our Testimonials</a>
                    <a href="#">FAQ</a>
                </div>

                <div className="footer-section links-section">
                    <h4>About Us</h4>
                    <a href="#">Our Mission</a>
                    <a href="#">Our Vision</a>
                    <a href="#">Awards and Recognitions</a>
                    <a href="#">History</a>
                    <a href="#">Teachers</a>
                </div>

                <div className="footer-section links-section">
                    <h4>Academics</h4>
                    <a href="#">Special Features</a>
                    <a href="#">Gallery</a>
                </div>

                <div className="footer-section links-section">
                    <h4>Contact Us</h4>
                    <a href="#">Information</a>
                    <a href="#">Map & Direction</a>
                </div>
            </div>

            <div className="footer-divider" />

            <div className="footer-bottom">
                <div className="footer-policies">
                    <a href="#">Terms of Service</a>
                    <span>|</span>
                    <a href="#">Privacy Policy</a>
                    <span>|</span>
                    <a href="#">Cookie Policy</a>
                </div>
                <div className="footer-socials">
                    <a href="#"><FaFacebook size={24} /></a>
                    <a href="#"><FaTwitter size={24} /></a>
                    <a href="#"><FaLinkedin size={24} /></a>
                </div>
            </div>

            <p className="footer-copyright">
                Copyright © [2023] Little Learners Academy. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
