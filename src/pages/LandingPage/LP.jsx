import React from 'react';
import Hero from '../../sections/Hero/Hero';
import FAQs from '../../sections/FAQs/FAQs';
import Footer from '../../sections/Footer/Footer';
import Community from '../../sections/Community/Community';
import Contact from '../../sections/Contact/Contact';
import Features from '../../sections/Features/Features';
import CampusLeader from '../../sections/CampusLeader/CampusLeader';

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
