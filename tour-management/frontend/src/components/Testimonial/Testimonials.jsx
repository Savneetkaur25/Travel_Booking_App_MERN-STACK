

import React from 'react'
import Slider from 'react-slick'
import t1 from '../../assets/images/t1.jpg'
import t2 from '../../assets/images/t2.jpg'
import t5 from '../../assets/images/t5.jpg'
import t10 from '../../assets/images/t10.jpg'
import t7 from '../../assets/images/t7.jpg'
import t9 from '../../assets/images/t9.jpg'

const Testimonials = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed : 1000,
    swipeToSlide : true,
    autoplaySpeed : 2000,
    slidesToShow : 3,
    
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  }
  return <Slider {...settings}>
    <div className="testimonial py-4 px-3">
      <p> Trips&more gave me the best experience .
         Customer service is very helpful with everything I wanted to know and learn about my trip! 
          also helped us found different fun excursions we could do while we are there.
           customer service answered me in a very fast timely manner with all my questions and concerns I had.
            Planning my trip was a very smooth process because of Trips&more !!</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={t1} className='w-25 h-25 rounded-2' alt=" " />
              <div>
                <h6 className='mb-0 mt-3'>John Snow</h6>
                <p>Customer</p>
              </div>
            </div>
    </div>

    <div className="testimonial py-4 px-3">
      <p> Trips&more gave me the best experience .
          We book 3rd trip from this company. 
           team was very helpful, highly responsive to our requests, 
           offers some great deals which can be customised to suit individual needs. 
           The team are further able to assist with specific itinerary and changes. 
           We enjoyed thoroughly our stay, all hotels and villa were fabulous.
           Everything was perfect and on time.
            Thanks for a good experience again</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={t2} className='w-25 h-25 rounded-2' alt=" " />
              <div>
                <h6 className='mb-0 mt-3'>Daenerys Targaryen</h6>
                <p>Customer</p>
              </div>
            </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p> Trips&more gave me the best experience .
           Had great experience traveling to Italy with Memorable Holidays and Trips&more. 
           It was family trip well planned with good hotel locations and amazing iternary which covered important places.
           Would definitely recommend Memorable Holidays and  team for making our vacation memorable. Thank you. 
           Collosueum in Rome and Venice</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={t5} className='w-25 h-25 rounded-2' alt=" " />
              <div>
                <h6 className='mb-0 mt-3'>Deamon Targaryen</h6>
                <p>Customer</p>
              </div>
            </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p> Trips&more gave me the best experience .
      Thankyou so much for making our Mystic Falls trip awesome.
      We as a family had a wonderful time and everything was so well planned and organised. 
      Can’t thankyou guys enough for making this trip a memorable family vacation.
       From The Entire Mikaelson Family : Thankyou
       Klaus Mikaelson, The Hybrid</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={t10} className='w-25 h-25 rounded-2' alt=" " />
              <div>
                <h6 className='mb-0 mt-3'>Klaus Mikaelson</h6>
                <p>Customer</p>
              </div>
            </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p> Trips&more gave me the best experience .
          the trip was awesome! We had a great time!! 
          Thank you so much for making everything seamless! Both the hotels had a charm of their own!
           We loved the castello beach hotel for its warm atmosphere and Constance ephelia for it’s amazing ambiance!
            The food was great (I have in fact gained a lot from this trip).
             We will certainly be recommending Seychelles and Trips&more!!</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={t7} className='w-25 h-25 rounded-2' alt=" " />
              <div>
                <h6 className='mb-0 mt-3'>Damon Salvatore</h6>
                <p>Customer</p>
              </div>
            </div>
    </div>
    <div className="testimonial py-4 px-3">
      <p> Trips&more gave me the best experience .
          Trips&more has a very professional approach yet they add a personal touch while booking and even during the trip.
           We had a very enjoyable and relaxed trip to Turkey. 
           The trip was very well organised and flexible enough to cater our preferences. 
           The food and accommodation arranged was beyond satisfactory. 
           Everything went very smoothly with pick-ups from our hotels and back. 
           It was a splendid, hassle free holiday.
            I certainly will be back and highly recommend fly Trips&more for an awesome adventure in Turkey.</p>

            <div className='d-flex align-items-center gap-4 mt-3'>
              <img src={t9} className='w-25 h-25 rounded-2' alt=" " />
              <div>
                <h6 className='mb-0 mt-3'>Katerina Petrova</h6>
                <p>Customer</p>
              </div>
            </div>
    </div>
  </Slider>
}

export default Testimonials;
