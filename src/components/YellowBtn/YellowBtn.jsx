import React from 'react';
import Button from 'react-bootstrap/Button';
import Styles from './YellowBtn.module.css';

export default function YellowBtn() {
  return (
    <Button variant='light' className={`${Styles.yellow_btn} fs-6`}>Explore chapters</Button>
  )
}
