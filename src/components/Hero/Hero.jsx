import React from 'react';
import Styles from './Hero.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Hero() {
  return (
    <div className={`${Styles.hero_bg} pt-3`}>
      


      {/* Navbar */}
      <Navbar expand='md'>
        <Container>
          <Navbar.Brand href='#'>
            <Image
              src='/img/Hero/az-logo-black.svg'
              width={150}
              className='img-fluid'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='az-navbar' />
          <Navbar.Collapse id='az-navbar'>
            <Nav className={`${Styles.nav_links} ms-auto`}>
              <Nav.Link href='#'>Lead Login</Nav.Link>
              <Nav.Link href='#'>Student Login</Nav.Link>
              <Nav.Link href='#'>Premium</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className='d-md-flex container justify-content-between'>
        {/* Text Section */}
        <div className='py-5 my-3 text-md-left'>
          {/* Hero text */}
          <div className={`${Styles.hero_text}`}>
            <span>We l</span>
            <span>
              <Image
                src='/img/Hero/heart.svg'
              />ve
            </span>
            <p>Coding</p>
          </div>
          {/* Hero SubText */}
          <div>
          The <strong>AlgoZenith Campus Connection Program</strong> is designed to help <br/> students establish a community of like-minded individuals on their <br/> campus who are passionate about programming and technology.
          </div>
          {/* Buttons */}
          <div className='mt-3'>
            <Button variant='dark' className={`${Styles.create_chapter_btn} me-4 `}>Create a chapter -&gt;</Button>
            <Button variant='light' className={`${Styles.yellow_btn} `}>Explore chapters</Button>
          </div>
        </div>
        {/* Flag Section */}
        <div>
          <Image
            src='/img/Hero/flag_alone.png'
            height={500}
          />
        </div>
      </div>
    </div>
  )
}