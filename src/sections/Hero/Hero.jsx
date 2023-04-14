import React from 'react';
// import { FiArrowRight } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Styles from './Hero.module.css';
import DarkBtn from '../../components/DarkBtn/DarkBtn';
import YellowBtn from '../../components/YellowBtn/YellowBtn';

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
      <Container className='d-md-flex text-center text-md-start justify-content-between'>
        {/* Text Section */}
        <div className='py-5 my-3 text-md-left'>
          {/* Hero text */}
          <h1 className={`${Styles.hero_text}`}>
            <span>We l</span>
            <span>
              <Image
                src='/img/Hero/heart.svg'
                width={30}
              />ve
            </span>
            <p>coding</p>
          </h1>
          {/* Hero SubText */}
          <div className={`${Styles.box} py-3`}>
          The <strong>AlgoZenith Campus Connection Program</strong> is designed to help students establish a community of like-minded individuals on their campus who are passionate about programming and technology.
          </div>
          {/* Buttons */}
          <div className='mt-3 d-grid gap-2 d-md-flex'>
            <DarkBtn/>
            <YellowBtn/>
          </div>
        </div>
        {/* Flag Section */}
        <div className=''>
          <Image
            src='/img/Hero/flag_alone.png'
            height={500}
          />
        </div>
      </Container>

    </div>
  )
}