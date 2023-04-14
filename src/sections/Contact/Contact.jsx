import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import Styles from './Contact.module.css';

export default function Contact() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={`${Styles.gradient_bg}`}>
      <Container className={`d-flex p-5`}>
        
        {/* Become a Leader Section */}
        <Card className={`${Styles.leader_card} p-3 shadow  me-md-5`}>
          <Card.Body>
            
            {/* Title */}
            <h2 className={`${Styles.title} fs-2`}>Become a</h2>
            <h1 className={`${Styles.title} fs-1`}>Chapter Leader!</h1>
            
            {/* Description */}
            <div className={`${Styles.normal_txt} my-3 mb-3 fs-6`}>
              Join the elite group of chapter leads today,<br/>
              for a tech-savvy tomorrow awaits you.
            </div>

            {/* Join Now Card */}
            <div className={`${Styles.join_now_card} d-flex p-3 align-items-center`}>
              <div className='border border-1 p-2 rounded-2 me-3'>
                <Image
                  src='/img/Contact/flag.svg'
                  width={38}
                />
              </div>
              <div>
                <div className={`${Styles.normal_txt} fs-4`}><strong>Join Now!</strong></div>
                <div className={`${Styles.small_txt}`}>Fill in the form & lead a college chapter!</div>
              </div>
            </div>

            {/*  */}
            <div className={`my-3 ${Styles.normal_txt}`}><strong>Couldn’t find what you wanted? Check these out!</strong></div>
            
            {/*  */}

            <div className='d-grid'>
              <Row>
                
                <Col xs={6}>
                  <div className={`border p-2 rounded-2 d-flex align-items-center shadow-sm`}>
                    
                    {/* Logo Card */}
                    <div className='border border-1 p-2 rounded-2 me-2'>
                      <Image 
                        src='/img/az.svg'
                        className=''
                        width={25}
                      />
                    </div>
                    
                    {/* Title and Sub-Title of the Card */}
                    <div >
                      <Image
                        src='/img/Contact/AZPremium.svg'
                        width={100}
                      />
                    </div>
                  </div>
                </Col>
                
                <Col xs={6}>
                  <div className={`border p-2 rounded-2 d-flex align-items-center shadow-sm`}>
                    <div className='border border-1 p-2 rounded-2 me-2'>
                      <Image 
                        src='/img/mock.svg'
                        width={25}
                      />
                    </div>
                    
                    {/* <div className={`${Styles.normal_txt}`}><strong>Mock Tests&nbsp; -&gt;</strong></div> */}
                    {/* Title and Sub-Title of the Card */}
                    <div >
                      <Image
                        src='/img/Contact/MockTest.svg'
                        width={100}
                      />
                    </div>
                  </div>
                </Col>
              
              </Row>
            </div>
           
            

          </Card.Body>
        </Card>

        <div className={`${Styles.form_divider} d-none d-md-inline-block`}></div>


        {/* Contact Us Form */}
        <div className='ms-5 d-none d-md-block'>
          <h1 className={`${Styles.title}`}>Contact Us</h1>
          <Form className='my-4'>

            <Form.Control className={`${Styles.form_input} my-2 shadow-sm`} type="text" value={'Kushal Khandelwal'} placeholder="Name*" />
            <div className='d-flex my-1'>
              <Form.Control className={`${Styles.form_input} my-2 me-2 shadow-sm`} type="email" placeholder="E-mail*" />
              <Form.Control className={`${Styles.form_input} my-2 shadow-sm`} type="text" placeholder="Mobile" />
            </div>
            <Form.Control className={`${Styles.form_input} my-2 shadow-sm`} type="text" placeholder="Subject*" />

            <FloatingLabel className={`my-2`} controlId="floatingTextarea2" label="Description*">
              <Form.Control
                as="textarea"
                placeholder="Description*"
                className={`${Styles.form_input} ${Styles.text_area} shadow-sm`}
                style={{ height: '100px' }}
              />
            </FloatingLabel>

            <div className={`d-flex justify-content-end my-2`}>
              <Button variant='light' className={`${Styles.yellow_btn} shadow-sm`}>Submit</Button>
            </div>

          </Form>
        </div>


      </Container>
      {/* Modal */}
      <Container className='text-center d-md-none pb-5'>
        <Container className={`d-grid my-4`}>

          <Button size='lg' variant="bg-dark" className={`${Styles.yellow_btn_lg} shadow-sm`} onClick={handleShow}>
          Still confused? Contact us -&gt;
          </Button>
        </Container>

        <Modal show={show} onHide={handleClose}>
          
          <Modal.Body>

            <div>
              <h1 className={`${Styles.title} text-center`}>Contact Us</h1>
              <Form className='my-4'>

                <Form.Control className={`${Styles.form_input} my-2 shadow-sm`} type="text" value={'Kushal Khandelwal'} placeholder="Name*" />
                <div className='d-flex my-1'>
                  <Form.Control className={`${Styles.form_input} my-2 me-2 shadow-sm`} type="email" placeholder="E-mail*" />
                  <Form.Control className={`${Styles.form_input} my-2 shadow-sm`} type="text" placeholder="Mobile" />
                </div>
                <Form.Control className={`${Styles.form_input} my-2 shadow-sm`} type="text" placeholder="Subject*" />

                <FloatingLabel className={`my-2`} controlId="floatingTextarea2" label="Description*">
                  <Form.Control
                    as="textarea"
                    placeholder="Description*"
                    className={`${Styles.form_input} ${Styles.text_area} shadow-sm`}
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>

                <div className={`d-grid my-4`}>
                  <Button size="lg" variant='bg-dark' className={`${Styles.yellow_btn_lg} shadow-sm`}>Submit</Button>
                </div>

              </Form>
            </div>


          </Modal.Body>
          
        </Modal>
      </Container>
    </div>
  )
}
