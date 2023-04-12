import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Styles from './Features.module.css';


function Features() {
  return (
    
    <Container className={`py-5`}>
      
      {/* Curriculum */}
      <div className={`mb-5 mb-md-0 d-md-flex align-items-center justify-content-between text-center text-md-start`}>
        <div className={``}>
          <Image
            src='/img/Features/curriculum.png'
            className='img-fluid'
            width={1000}
          />
        </div>
        
        <div className=''>
          <div className={`${Styles.title} fs-1`}>Articulate Curriculum</div>
          <div className={`${Styles.sub_title} fs-6`}>Get a clear direction for your technical skills with Algozenith and the Campus  Connection Programme. Make a positive impact on your community and succeed  with our guidance. Join us now!</div>
        </div>
      </div>
      
      {/* Events */}
      <div className={`d-md-flex flex-row-reverse align-items-center justify-content-between text-center text-md-start`}>
        
        <div className='mb-5 mb-md-0'>
          <Image
            src='/img/Features/events.png'
            className='img-fluid'
            width={1500}
          />
        </div>
        
        <div className={``}>
          <div className={`${Styles.title} fs-1`}>Regular events <br/> to polish you up</div>
          <div className={`${Styles.sub_title} fs-6`}>Elevate your coding skills and succeed with Algozenith. Join us for regular seminars, contests, and Hackathons with industry experts. Plus, get goodies and swags for your hard work in a positive and competitive environment. Don't miss out on the opportunities Algozenith provides!</div>
        </div>
        
      </div>
      
      {/* Rewards */}
      <div className={`d-md-flex align-items-center justify-content-between text-center text-md-start`}>
        <div className={`mb-3 mb-md-0`}>
          <Image
            src='/img/Features/rewards.png'
            className='img-fluid'
            width={1500}
          />
        </div>
        <div className='ms-5'>
          <div className={`${Styles.title} fs-1`}>Rewards for everyone</div>
          <div className={`${Styles.sub_title} fs-6`}>Be recognized for your hard work with Algozenith. Our reward system includes goodies for the leader, prizes for contest winners (including monetary rewards), and  swags for the core team. Join us now and get rewarded for your disciplined steps towards success!</div>
        </div>
      </div>
    
    </Container>
  
  )
}

export default Features
