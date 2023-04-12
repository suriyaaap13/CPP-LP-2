import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Styles from './CampusLeader.module.css';


export default function CampusLeader() {
  return (
    <div className='pb-5 mb-3'>
      <Container className={`text-center`}>
          <h1 className={`${Styles.title} py-1 fs-1`}>Together, We Code Better</h1>
          <h6 className={`${Styles.sub_title} py-1 fs-6`}>Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.</h6>
          <Container className='w-75 d-none d-md-grid gap-4 px-md-5 mt-4'>
            
            <Row className='d-none d-md-flex'>
              
              <Col>
                <video className={`rounded-3 shadow`} width="230" height="230" controls>
                  <source src='/video/Leaders/01.mp4' type="video/mp4" />
                </video>
              </Col>
              
              <Col>
                <video className={`rounded-3 shadow`} width="230" height="230" controls>
                  <source src='/video/Leaders/02.mp4' type="video/mp4" />
                </video>
              </Col>
              
              <Col>
                <video className={`rounded-3 shadow`} width="230" height="230" controls>
                  <source src='/video/Leaders/03.mp4' type="video/mp4" />
                </video>
              </Col>
            
            </Row>
            
            <Row className='d-none d-md-flex mx-md-5 px-md-5'>
              
              <Col>
                <video className={`rounded-3 shadow`} width="230" height="230" controls>
                  <source src='/video/Leaders/05.mp4' type="video/mp4" />
                </video>
              </Col>
              
              <Col>
                <video className={`rounded-3 shadow`} width="230" height="230" controls>
                  <source src='/video/Leaders/06.mp4' type="video/mp4" />
                </video>
              </Col>
            </Row>

            
          
          </Container>

          
          
          
      </Container>
      <div className='vw-100 mt-3 d-flex d-md-none overflow-auto'>

        <video className={`rounded-3 shadow mx-3`} width="230" height="230" controls>
          <source src='/video/Leaders/01.mp4' type="video/mp4" />
        </video>

        <video className={`rounded-3 shadow mx-3`} width="230" height="230" controls>
          <source src='/video/Leaders/02.mp4' type="video/mp4" />
        </video>

        <video className={`rounded-3 shadow mx-3`} width="230" height="230" controls>
          <source src='/video/Leaders/03.mp4' type="video/mp4" />
        </video>

        <video className={`rounded-3 shadow mx-3`} width="230" height="230" controls>
          <source src='/video/Leaders/05.mp4' type="video/mp4" />
        </video>

        <video className={`rounded-3 shadow mx-3`} width="230" height="230" controls>
          <source src='/video/Leaders/06.mp4' type="video/mp4" />
        </video>


      </div>
    </div>    
  )
}
