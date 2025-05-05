
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Home from './assets/pages/Home/Home';
import AboutUs from './assets/pages/AboutUs/AboutUs';
import Academics from './assets/pages/Academics/Academics'

import './App.css'
import Loader from './components/loader/Loader';
import TopBanner from './components/TopBanner/TopBanner';
import Navbar from './components/Navbar/Navbar';
import logo from '/public/images/logo.png';
import toggle from '/public/images/toggle.png';
import Footer from './components/Footer/Footer';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/aboutUs' },
    { label: 'Academics', path: '/academics' },
    { label: 'Admission', path: '#admission' },
    { label: 'Student Life', path: '#student-life' },
    { label: 'Contact', path: '#contact' },

  ]
  return (
    <>


      <BrowserRouter>
        <TopBanner />
        <Navbar logo={logo} links={links} toggle={toggle} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/academics' element={<Academics />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App
