import React, { Component, Fragment } from 'react';
import './Courses.scss';
import cn from 'classnames';

class Courses extends Component {
  constructor (props) {
    super(props);
    this.state = {
      blocksState: {
        easyBlock: '',
        mediumBlock: '',
        hardBlock: '',
      },
    };
  }

  sumToPay = {
    easy: 1999,
    medium: 2999,
    hard: 4999,
  };
  render () {
    const { title, smallSize, hideOpinion } = this.props;
    return (
      <section className='courses' id='about-courses'>
        <div className='testimonials wow zoomIn'>
          <div className={'inner ' + smallSize}>
            {title && (
              <Fragment>
                <h1>{title}</h1>
                <div className='border'/>
              </Fragment>
            )}
            <div className='row'>
              <div className={cn('col', this.state.blocksState.easy)}
                onClick={ this.updateState }
                id={this.sumToPay.easy}
              >
                <div className='testimonial wow fadeInLeft'>
                  <img src={require('./../../images/easy.jpg')} alt=''/>
                  <div className='name'>Самостоятельный</div>
                  <span className='price'>{this.sumToPay.easy} &#8381;</span>
                  <p className={hideOpinion}>
                    4 вебинара, доступ в чат
                  </p>
                </div>
              </div>
              <div className={cn('col', this.state.blocksState.medium)}
                onClick={this.updateState}
                id={this.sumToPay.medium}
              >
                <div className='testimonial wow zoomIn'>
                  <img src={require('./../../images/middle.jpg')} alt=''/>
                  <div className='name'>Базовый</div>
                  <span className='price'>{ this.sumToPay.medium } &#8381;</span>
                  <p className={hideOpinion}>
                    4 вебинара, доступ в чат,
                    ответы на вопросы
                    в течение недели
                  </p>
                </div>
              </div>
              <div className={cn('col', this.state.blocksState.hard)}
                onClick={ this.updateState }
                id={this.sumToPay.hard}
              >
                <div className='testimonial wow fadeInRight'>
                  <img src={require('./../../images/hard.jpg')} alt=''/>
                  <div className='name'>Максимум</div>
                  <span className='price'>{this.sumToPay.hard} &#8381;</span>
                  <p className={hideOpinion}>
                    4 вебинара, доступ в чат,
                    контроль пищевого дневника
                    в течение месяца и ответы на
                    вопросы
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  updateState = (event) => {
    if(this.props.needUpdateCurrentSum) {
      this.changeBlock(event);
      this.props.updateCurrentSum(event.currentTarget.id);
    }
  };
  changeBlock (event) {
    let currentBlock = event.currentTarget.id;
    this.setState({
      blocksState: {
        easy: '',
        medium: '',
        hard: '',
      },
    });
    if (currentBlock == this.sumToPay.easy) {
      this.setState({
        blocksState: {
          easy: 'block-gray',
        } });
    }
    if (currentBlock == this.sumToPay.medium) {
      this.setState({
        blocksState: {
          medium: 'block-gray',
        } });
    }
    if (currentBlock == this.sumToPay.hard) {
      this.setState({
        blocksState: {
          hard: 'block-gray',
        } });
    }
  }
}

export default Courses;

