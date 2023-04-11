import React from 'react';
import Container from 'react-bootstrap/Container';
import ReactPlayer from 'react-player'
import Styles from './CampusLeader.module.css';


export default function CampusLeader() {
  return (
    <Container className={`text-center`}>
        <h1 className={`${Styles.title} py-1`}>Together, We Code Better</h1>
        <h6 className={`${Styles.sub_title} py-1`}>Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.</h6>
        <div className='d-flex flex-wrap justify-space-around'>
          {/* <ReactPlayer url={'/Campus Leaders/01.mp4'} controls={true} />
          <ReactPlayer url={'/Campus Leaders/02.mp4'} controls={true} />
          <ReactPlayer url={'/Campus Leaders/03.mp4'} controls={true} />
          <ReactPlayer url={'/Campus Leaders/04.mp4'} controls={true} />
          <ReactPlayer url={'/Campus Leaders/05.mp4'} controls={true} />
          <ReactPlayer url={'/Campus Leaders/06.mp4'} controls={true} /> */}
        </div>
    </Container>
  )
}
