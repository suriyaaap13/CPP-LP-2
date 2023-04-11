import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={`${Styles.gradient_bg}`}>
      <Container className={`d-flex p-5`}>
        
        {/* Become a Leader Section */}
        <Card className={`${Styles.leader_card} p-3 shadow  me-5`}>
          <Card.Body>
            
            {/* Title */}
            <h2 className={`${Styles.title_nxt}`}>Become a</h2>
            <h1 className={`${Styles.title_nxt}`}>Chapter Leader!</h1>
            
            {/*  */}
            <div className={`${Styles.normal_txt} mt-1 mb-3`}>
              Join the elite group of chapter leads today,<br/>
              for a tech-savvy tomorrow awaits you.
            </div>

            {/* Join Now Card */}
            <div className={`${Styles.join_now_card} d-flex p-2 align-items-center`}>
              <div className='border border-1 p-2 rounded-2 me-3'>
                <Image
                  src='/img/flag.svg'
                  className={``}
                  width={28}
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
              <div className={`border p-2 rounded-2 me-2 d-flex d-flex align-items-center shadow-sm`}>
                <div className='border border-1 p-2 rounded-2 me-2'>
                  <Image 
                    src='/img/az.svg'
                    className=''
                    width={28}
                  />
                </div>
                
                <div className={`${Styles.normal_txt}`}><strong>AZ Premium&nbsp; -&gt;</strong></div>
              </div>
              <div className={`border p-2 rounded-2 ms-2 d-flex d-flex align-items-center shadow-sm`}>
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

        <div className={`${Styles.form_divider}`}></div>


        {/* Contact Us Form */}
        <div className='ms-5'>
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
    </div>
  )
}
