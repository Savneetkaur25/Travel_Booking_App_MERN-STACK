

import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "It is very important for the customer to pay attention to the weather conditions",
    },
    {
        imgUrl: guideImg,
        title:  "Best Tour Guide",
        desc:  "Only the best tour guides for our customers for a better trip",
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "Customize your trip according to your need and budget",
    }
]

const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=> ( 
    <Col lg='3' key={index}><ServiceCard item={item} />
    </Col>
    ))
  }
  </>
    
}

export default ServiceList
