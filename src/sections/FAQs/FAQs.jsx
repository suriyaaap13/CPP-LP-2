import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Styles from './FAQs.module.css'


export default function FAQs() {
  return (
    <div className='my-5'>
      <h1 className={`${Styles.title} fs-1 text-center my-4`}>Frequently Asked Questions</h1>
      <Container className='px-5 mt-3'>
        <Accordion className='px-md-5' defaultActiveKey="0">
          
          <Accordion.Item className={`${Styles.acc_item} my-3`}  eventKey="0">
            <Accordion.Header className={`${Styles.acc_header} fs-6`}>
            Who should join AlgoZenith?</Accordion.Header>
            <Accordion.Body className={`${Styles.acc_body}`}>
            AlgoZenith is primarily aimed at college and university students who are interested in learning algorithmic problem-solving skills and want to give their careers a head start.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item className={`${Styles.acc_item} my-3`}  eventKey="1">
            <Accordion.Header className={`${Styles.acc_header} fs-6`}>Can I join multiple AlgoZenith chapters?</Accordion.Header>
            <Accordion.Body className={`${Styles.acc_body}`}>
            AlgoZenith is primarily aimed at college and university students who are interested in learning algorithmic problem-solving skills and want to give their careers a head start.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item className={`${Styles.acc_item} my-3`}  eventKey="2">
            <Accordion.Header className={`${Styles.acc_header} fs-6`}>What is the time commitment for AlgoZenith Leads?</Accordion.Header>
            <Accordion.Body className={`${Styles.acc_body}`}>
            AlgoZenith is primarily aimed at college and university students who are interested in learning algorithmic problem-solving skills and want to give their careers a head start.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item className={`${Styles.acc_item} my-3`}  eventKey="3">
            <Accordion.Header className={`${Styles.acc_header} fs-6`}>What is the timeline for applying for the AlgoZenith Lead position?</Accordion.Header>
            <Accordion.Body className={`${Styles.acc_body}`}>
            AlgoZenith is primarily aimed at college and university students who are interested in learning algorithmic problem-solving skills and want to give their careers a head start.
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item className={`${Styles.acc_item} my-3`}  eventKey="4">
            <Accordion.Header className={`${Styles.acc_header} fs-6`}>What does an AlgoZenith Lead do?</Accordion.Header>
            <Accordion.Body className={`${Styles.acc_body}`}>
            AlgoZenith is primarily aimed at college and university students who are interested in learning algorithmic problem-solving skills and want to give their careers a head start.
            </Accordion.Body>
          </Accordion.Item>
        
        </Accordion>
      </Container>
    </div>
  )
}
