import React from 'react';
import Container from 'react-bootstrap/Container';
import Styles from './CampusLeader.module.css';

export default function CampusLeader() {
  return (
    <Container className={`text-center`}>
        <h1 className={`${Styles.title} py-1`}>Together, We Code Better</h1>
        <h6 className={`${Styles.sub_title} py-1`}>Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.</h6>
    </Container>
  )
}
