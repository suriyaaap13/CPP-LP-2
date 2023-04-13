import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Styles from './Footer.module.css';

export default function Footer() {
  return (
    <Container>
      {/* Subscribe to our Newsletter */}
      <Container className='d-flex p-5 justify-content-between'>
        
        <div className='py-5 text-center text-md-start'>
          {/* Title */}
          <h1 className={`${Styles.title}`}>Subscribe to our <span className={`${Styles.blue_title}`}>Newsletter</span></h1>
          {/* Text */}
          <h6 className={`${Styles.normal_txt} my-4`}>You’ll receive useful content vital to your DSA Journey!</h6>
          {/* Strong Text */}
          <h6 className={`${Styles.normal_txt} my-4`}>
            <strong>
            Get an awesome booklet containing 10 most frequent HR questions with model answers.. and how you can write one specifically for you!
            </strong>
          </h6>
          {/* Form */}
          <Form className='d-flex justify-content-center justify-content-md-start'>
            <Form.Control className={`${Styles.input_bar} w-50`} type="text" />
            <Button className={`${Styles.submit_btn}`} type="submit">
              Submit
            </Button>
          </Form>
        </div>

        {/* HR Round Booklet Image */}
        <div className='d-none d-md-inline-block'>
          <Image
            src='/img/Footer/HR_Q&A.svg'
            width={300}
          />
        </div>

      </Container>

      {/* Casual Links */}


      {/* Copy Rights */}
      <Container className='p-5'>
        <div className={`${Styles.divider}`}></div>
        {/*  */}
        <div className='py-2'>
          <Image
            src='/img/Footer/copyright.svg'
            width={350}
          />
        </div>
      </Container>
    </Container>
  )
}
