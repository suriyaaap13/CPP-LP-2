import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import Button from 'react-bootstrap/Button';
import Styles from './DarkBtn.module.css';

export default function DarkBtn() {
  return (
    <Button variant='dark' className={`d-flex justify-content-center align-items-center ${Styles.dark_btn} fs-6`}>
        Create a chapter 
        <div className='ms-1 fs-6'>
            <FiArrowRight/>
        </div>
    </Button>
  )
}
