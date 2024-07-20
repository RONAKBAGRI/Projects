import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrolltoTop';
import PrivacyPolicy from './components/PrivacyPolicy';



const App = () => {
  return (
      <div>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}  />
          <Route path="/experience" element={<Experience/>}  />
          <Route path="/contact" element={<Contact/>}  />
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        </Routes>
        <Footer/>
      </div>
  );
};

export default App;
