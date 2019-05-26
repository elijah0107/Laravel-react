import React from 'react'
import './Courses.scss'

const Courses = () => {
  return (
    <section className="courses" id="about-courses">
      <div className="testimonials">
        <div className="inner">
          <h1>Мои Курсы</h1>
          <div className="border"/>
          <div className="row">
            <div className="col">
              <div className="testimonial">
                <img src={require('./../../images/light.jpg')} alt=""/>
                <div className="name">Базовый</div>
                <span className="price">1999 &#8381;</span>
                <p>
                  4 вебинара, доступ в чат
                </p>
              </div>
            </div>
            <div className="col">
              <div className="testimonial">
                <img src={require('./../../images/middle.jpg')} alt=""/>
                <div className="name">Продвинутый</div>
                <span className="price">2999 &#8381;</span>
                <p>
                  4 вебинара, доступ в чат, ответы на вопросы в течение недели
                </p>
              </div>
            </div>
            <div className="col">
              <div className="testimonial">
                <img src={require('./../../images/hard.jpg')} alt=""/>
                <div className="name">Максимум</div>
                <span className="price">4999 &#8381;</span>
                <p>
                  4 вебинара, доступ в чат, контроль пищевого дневника в течение месяца и ответы на
                  вопросы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};
export default Courses

