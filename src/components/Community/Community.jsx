import React from 'react';
import Styles from './Community.module.css';
import { Button, Image } from 'react-bootstrap';

export default function Community() {
  return (
    <div>
        <div className={`${Styles.page_gradient}`}>
            <div className={`${Styles.title} text-center pt-4`}>Our Partners</div>
            <div className={`${Styles.sub_title} text-center pt-4`}>At AlgoZenith, we believe in the power of community and collaboration. Through our partnerships, we have had the opportunity to organize and <br/> participate in various technical events, which have enabled students & professionals to come together, learn, collaborate, & showcase their skills.</div>
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
            <div className={`${Styles.title}`}>
            A vibrant glimpse into the community
            </div>

            {/* Heading */}
            <div className={`${Styles.sub_title}`}>
            Browse through the gallery to see images of coding competitions, workshops, guest lectures, & other events organized by different chapters <br/> across different campuses, and create one for your university as well!
            </div>

            {/* Stats */}
            <div className='my-3 d-flex justify-content-center align-items-center '>
                <div className='p-5'>
                    <div className={`${Styles.title}`}>100+</div>
                    <div className={`${Styles.sub_heading}`}>chapters</div>
                </div>
                <div className='p-5 border-start border-end'>
                    <div className={`${Styles.title}`}>5000+</div>
                    <div className={`${Styles.sub_heading}`}>Students</div>
                </div>
                <div className='p-5'>
                    <div className={`${Styles.title}`}>200+</div>
                    <div className={`${Styles.sub_heading}`}>Events organized</div>
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
