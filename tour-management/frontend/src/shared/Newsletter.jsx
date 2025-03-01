import React from 'react'
import './newsletter.css'

import { Container, Col, Row } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful traveling information.</h2>

                    
                    <p>Subscribe to our weekly newsletters to explore new destinations and meet Trips&more far-flung team of writers and editors. 
                        Packed with insightful advice from local experts, 
                        our newsletters will bring the world to your inbox.

                       <br/> <b> Want to read a recent newsletter?</b> 

                       <br/> Get a deep dive into a trending destination with Picture Yourself In beautiful destinations.
                        <br /> Stay updated on the latest travel news and trends with Friday Around the Planet.

                        <br/> <b> Plus, get 20% off at our shop for signing up!</b> 
                        
                        </p>

                        <div className="newsletter__input">
                        <input type='email' placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>

                        

                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt='' />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter