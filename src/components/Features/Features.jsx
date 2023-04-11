import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Styles from './Features.module.css';


function Features() {
  return (
    
    <Container className={`py-5`}>
      
      {/* Curriculum */}
      <div className={`px-2 d-flex align-items-center justify-content-between`}>
        <div className={`ps-2`}>
          <Image
            src='/img/Features/curriculum.png'
            className='img-fluid'
            width={470}
          />
        </div>
        
        <div className='pe-2'>
          <div className={`${Styles.title}`}>Articulate Curriculum</div>
          <div className={`${Styles.sub_title}`}>Get a clear direction for your technical skills with Algozenith and the Campus <br/> Connection Programme. Make a positive impact on your community and succeed <br/> with our guidance. Join us now!</div>
        </div>
      </div>
      
      {/* Events */}
      <div className={`px-2 d-flex align-items-center justify-content-between`}>
        
        <div className={`ps-1 ms-1`}>
          <div className={`${Styles.title}`}>Regular events <br/> to polish you up</div>
          <div className={`${Styles.sub_title}`}>Elevate your coding skills and succeed with Algozenith. Join us for regular seminars, <br/> contests, and Hackathons with industry experts. Plus, get goodies and swags for <br/> your hard work in a positive and competitive environment. Don't miss out on the <br/> opportunities Algozenith provides!</div>
        </div>
        <div className='pe-1 me-1'>
          <Image
            src='/img/Features/events.png'
            className='img-fluid'
            width={470}
          />
        </div>
      </div>
      
      {/* Rewards */}
      <div className={`px-2 d-flex align-items-center justify-content-between`}>
        <div className={`ps-1`}>
          <Image
            src='/img/Features/rewards.png'
            className='img-fluid'
            width={470}
          />
        </div>
        <div className='pe-2'>
          <div className={`${Styles.title}`}>Rewards for everyone</div>
          <div className={`${Styles.sub_title}`}>Be recognized for your hard work with Algozenith. Our reward system includes <br/> goodies for the leader, prizes for contest winners (including monetary rewards), and <br/> swags for the core team. Join us now and get rewarded for your disciplined steps <br/> towards success!</div>
        </div>
      </div>
    
    </Container>
  
  )
}

export default Features
