import React from 'react';
import Button from 'react-bootstrap/Button';
import Hero from '../../components/Hero/Hero';
import FAQs from '../../components/FAQs/FAQs';
import Footer from '../../components/Footer/Footer';
import Intro from '../../components/Intro/Intro';
import Community from '../../components/Community/Community';
import Contact from '../../components/Contact/Contact';
import Features from '../../components/Features/Features';
import CampusLeader from '../../components/CampusLeader/CampusLeader';

export default function LP() {
  return (
    <div className='overflow-hidden'>
      
      {/* Hero Section */}
      <Hero/>

      {/* Feactures Section */}
      <Features/>

      {/* Campus Leader video Section */}
      <CampusLeader/>

      {/* Partners Section */}

      {/* Community Section */}

      <Community/>


      {/* FAQs */}

      <FAQs/>


      {/* Contact Us */}
      <Contact/>


      {/* Footer */}
      <Footer/>

    </div>
  )
}
