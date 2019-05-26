import React from 'react'
import './Reviews.scss'
import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};
const SlideView = ({}) => {
  return (
    <section className="reviews" id="reviews">
      <Slider
        {...settings}
      >
        <div className="item">
          <img src={require('./../../images/2.jpg')} alt=""/>
        </div>
        <div className="item">
          <img src={require('./../../images/3.jpg')} alt=""/>
        </div>
        <div className="item">
          <img src={require('./../../images/4.jpg')} alt=""/>
        </div>
        <div className="item">
          <img src={require('./../../images/5.jpg')} alt=""/>
        </div>
      </Slider>
    </section>
  )
};
export default SlideView
