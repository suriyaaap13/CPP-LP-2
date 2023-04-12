import React from 'react';
import Container from 'react-bootstrap/Container';
import Styles from './CampusLeader.module.css';


export default function CampusLeader() {
  return (
    <Container className={`text-center`}>
        <h1 className={`${Styles.title} py-1`}>Together, We Code Better</h1>
        <h6 className={`${Styles.sub_title} py-1`}>Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.</h6>
        <Container className='w-full d-flex flex-wrap justify-content-between px-5'>
          <video className={`rounded-3 shadow`} width="230" height="230" controls>
            <source src='/video/Leaders/01.mp4' type="video/mp4" />
          </video>
          <video className={`rounded-3 shadow`} width="230" height="230" controls>
            <source src='/video/Leaders/02.mp4' type="video/mp4" />
          </video>
          <video className={`rounded-3 shadow`} width="230" height="230" controls>
            <source src='/video/Leaders/03.mp4' type="video/mp4" />
          </video>
          <video className={`rounded-3 shadow`} width="230" height="230" controls>
            <source src='/video/Leaders/04.mp4' type="video/mp4" />
          </video>
          <video className={`rounded-3 shadow`} width="230" height="230" controls>
            <source src='/video/Leaders/05.mp4' type="video/mp4" />
          </video>
          <video className={`rounded-3 shadow`} width="230" height="230" controls>
            <source src='/video/Leaders/06.mp4' type="video/mp4" />
          </video>
        </Container>
    </Container>
  )
}
