
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Home from './assets/pages/Home/Home';
import './App.css'
import TopBanner from './components/TopBanner/TopBanner';
import Navbar from './components/Navbar/Navbar';
import logo from '/public/images/logo.png';
import toggle from '/public/images/toggle.png';
import Loader from './components/loader/Loader';


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
  {label: 'Home' , href: '/'},
  {label: 'About Us' , href: '#about'},
  {label: 'Academics' , href: '#academics'},
  {label: 'Admission' , href: '#academics'},
  {label: 'Student Life' , href: '#student-life'},
  {label: 'Contact' , href: '#contact'},

]
  return (
 <>


<BrowserRouter>
<TopBanner/>
<Navbar logo={logo} links={links} toggle={toggle} />
<Routes>
    <Route path='/' element={<Home/>} />
  </Routes>
  </BrowserRouter>
 </>

  );
}

export default App
