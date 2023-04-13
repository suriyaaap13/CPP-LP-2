import React from 'react';
import Styles from './Intro.module.css';

export default function Intro() {
  return (
    <div className={`my-5`}>
      {/*  */}
      <div className={`d-flex me-5 pe-5`}>
        <img src='' alt='Image'/>
        <div>
          <div className={`${Styles.title}`}>Articulate Curriculum</div>
          <div className={`${Styles.sub_title}`}>Get a clear direction for your technical skills with Algozenith and the Campus <br/> Connection Programme. Make a positive impact on your community and succeed <br/> with our guidance. Join us now!</div>
        </div>
      </div>
      {/*  */}
      <div className={`d-flex ms-5`}>
        <img src='' alt='Image'/>
        <div>
          <div className={`${Styles.title}`}>Regular events to polish you up</div>
          <div className={`${Styles.sub_title}`}>Elevate your coding skills and succeed with Algozenith. Join us for regular seminars, <br/> contests, and Hackathons with industry experts. Plus, get goodies and swags for <br/> your hard work in a positive and competitive environment. Don't miss out on the <br/> opportunities Algozenith provides!</div>
        </div>
      </div>
      {/*  */}
      <div className={`d-flex me-5`}>
        <img src='' alt='Image'/>
        <div>
          <div className={`${Styles.title}`}>Rewards for everyone</div>
          <div className={`${Styles.sub_title}`}>Be recognized for your hard work with Algozenith. Our reward system includes <br/> goodies for the leader, prizes for contest winners (including monetary rewards), and <br/> swags for the core team. Join us now and get rewarded for your disciplined steps <br/> towards success!</div>
        </div>
      </div>
    </div>
  )
}
