import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={`${Styles.gradient_bg}`}>
      <Container className={`d-flex p-5`}>
        
        {/* Become a Leader Section */}
        <Card className={`${Styles.leader_card} p-3 shadow`}>
          <Card.Body>
            
            {/* Title */}
            <div className={`${Styles.title_nxt}`}>Become a</div>
            <div className={`${Styles.title}`}>Chapter Leader!</div>
            
            {/*  */}
            <div className={`${Styles.normal_txt} mt-1 mb-3`}>
              Join the elite group of chapter leads today,<br/>
              for a tech-savvy tomorrow awaits you.
            </div>

            {/* Join Now Card */}
            <div className={`${Styles.join_now_card} d-flex p-3 align-items-center`}>
              <div className='border border-1 p-2 rounded-2 me-3'>
                <Image
                  src='/img/flag.svg'
                  className={``}
                  width={32}
                />
              </div>
              <div>
                <div className={`${Styles.join_card_title}`}>Join Now!</div>
                <div className={`${Styles.normal_txt}`}>Fill in the form & lead a college chapter!</div>
              </div>
            </div>

            {/*  */}
            <div className={`my-2 ${Styles.normal_txt}`}><strong>Couldn’t find what you wanted? Check these out!</strong></div>
            
            {/*  */}

            <div className='d-flex justify-content-between'>
              <div className={`border p-2 rounded-2 d-flex d-flex align-items-center shadow-sm`}>
                <div className='border border-1 p-2 rounded-2 me-2'>
                  <Image 
                    src='/img/az.svg'
                    className=''
                    width={28}
                  />
                </div>
                
                <div className={`${Styles.normal_txt}`}><strong>AZ Premium&nbsp; -&gt;</strong></div>
              </div>
              <div className={`border p-2 rounded-2 d-flex d-flex align-items-center shadow-sm`}>
                <div className='border border-1 p-2 rounded-2 me-2'>
                  <Image 
                    src='/img/mock.svg'
                    width={28}
                  />
                </div>
                
                <div className={`${Styles.normal_txt}`}><strong>Mock Tests&nbsp; -&gt;</strong></div>
              </div>
            </div>
           
            

          </Card.Body>
        </Card>


        {/* Contact Us Form */}
        <div>
          <div>Contact Us</div>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>
        </div>
      </Container>
    </div>
  )
}
