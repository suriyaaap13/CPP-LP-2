import React from 'react';
import Styles from './Community.module.css';
import { Button, Image } from 'react-bootstrap';

export default function Community() {
  return (
    <div>
        <div className={`${Styles.page_gradient}`}>
            <div className={`${Styles.title} text-center pt-4 fs-1`}>Our Partners</div>
            <div className={`${Styles.sub_title} text-center pt-4 fs-6`}>At AlgoZenith, we believe in the power of community and collaboration. Through our partnerships, we have had the opportunity to organize and <br/> participate in various technical events, which have enabled students & professionals to come together, learn, collaborate, & showcase their skills.</div>
            {/* Buttons */}
            <div className='text-center mt-5'>
                <Button variant='dark' className={`${Styles.create_chapter_btn} me-4`}>Create a chapter -&gt;</Button>
                <Button variant='light' className={`${Styles.view_partners_btn}`}>View all partners</Button>
            </div>
            {/* Images */}
            <div className={`${Styles.fade_img_container}`}>
                <Image
                    src='/img/community.png'
                    className={`img-fluid`}
                />
            </div>
        </div>
        {/* Achievements Section */}
        <div className='container text-center mt-5'>
            
            {/* Title */}
            <h1 className={`${Styles.title} fs-1`}>
            A vibrant glimpse into the community
            </h1>

            {/* Heading */}
            <div className={`${Styles.sub_title} mt-3 fs-6`}>
            Browse through the gallery to see images of coding competitions, workshops, guest lectures, & other events organized by different chapters <br/> across different campuses, and create one for your university as well!
            </div>

            {/* Stats */}
            <div className='my-3 d-flex justify-content-center align-items-center '>
                
                <div className='px-5 py-3'>
                    <h1 className={`${Styles.title} fs-1`}>100+</h1>
                    <h6 className={`${Styles.sub_heading} fs-6`}>chapters</h6>
                </div>
                
                <div className='px-5 py-3 border-start border-end'>
                    <h1 className={`${Styles.title} fs-1`}>5000+</h1>
                    <h6 className={`${Styles.sub_heading} fs-6`}>Students</h6>
                </div>

                <div className='px-5 py-3'>
                    <h1 className={`${Styles.title} fs-1`}>200+</h1>
                    <h6 className={`${Styles.sub_heading} fs-6`}>Events organized</h6>
                </div>
            
            </div>
            
            
            <Button variant='bg-light' className={`${Styles.create_chapter_btn} mt-3`}>Create a chapter -&gt;</Button>

            
            
            {/* Horizontal Scroll Images */}
            <div>
                
            </div>
        </div>
    </div>
  )
}
