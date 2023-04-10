import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={`${Styles.gradient_bg}`}>
      <div className={`d-flex container p-5`}>
        
        {/* Become a Leader Section */}
        <Card className='p-1 shadow'>
          <Card.Body>
            <div className={`${Styles.title_nxt}`}>Become a</div>
            <div className={`${Styles.title}`}>Chapter Leader!</div>
            <div className={`${Styles.normal_txt}`}>
              Join the elite group of chapter leads today,<br/>
              for a tech-savvy tomorrow awaits you.
            </div>
            <div className={`${Styles.join_now_card} d-flex p-3 align-items-center`}>
              <div className='border border-1 p-2 rounded-2 me-3'>
                <Image
                  src='/img/flag.svg'
                  className={``}
                />
              </div>
              <div>
                <div className={`${Styles.join_card_title}`}>Join Now!</div>
                <div className={`${Styles.join_card_normal_txt}`}>Fill in the form & lead a college chapter!</div>
              </div>
            </div>
            <div className={`my-4 ${Styles.join_card_normal_txt}`}>Couldn’t find what you wanted? Check these out!</div>
            <div className='d-flex'>
              <div className={`border p-3 rounded-2 d-flex d-flex align-items-center`}>
                <div className='border border-1 p-3 rounded-2 me-3'>
                  <Image 
                    src='/img/az.svg'
                    className=''
                  />
                </div>
                
                <div>AZ Premium -&gt;</div>
              </div>
              <div className={`d-flex d-flex align-items-center`}>
                <div className='border border-1 p-2 rounded-2'>
                    <Image 
                      src='/img/mock.svg'
                      className=''
                    />
                </div>
                <div>Mock Tests -&gt;</div>
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
      </div>
    </div>
  )
}
