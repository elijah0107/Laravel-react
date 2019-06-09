import React, {Component, Fragment} from 'react'
import './Courses.scss'
import cn from 'classnames'

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocksState: {
        easyBlock: '',
        mediumBlock: '',
        hardBlock: ''
      }
    }
  };

  sumToPay = {
    easy: 1999,
    medium: 2999,
    hard: 4999,
  };
  render() {
    const { needShowTitle, smallSize } = this.props;
    return (
      <section className="courses" id="about-courses">
        <div className="testimonials">
          <div className={'inner ' + smallSize}>
            {needShowTitle && (
              <Fragment>
                <h1>Мои Курсы</h1>
                <div className="border"/>
              </Fragment>
            )}
            <div className="row">
              <div className={cn('col', this.state.blockState)} onClick={ this.updateState } id={this.sumToPay.easy} >
                <div className="testimonial">
                  <img src={require('./../../images/easy.jpg')} alt=""/>
                  <div className="name">Базовый</div>
                  <span className="price">{this.sumToPay.easy} &#8381;</span>
                  <p>
                    4 вебинара, доступ в чат
                  </p>
                </div>
              </div>
              <div className={cn('col', this.state.blockState)} onClick={ this.updateState } id={this.sumToPay.medium} >
                <div className="testimonial">
                  <img src={require('./../../images/middle.jpg')} alt=""/>
                  <div className="name">Продвинутый</div>
                  <span className="price">{ this.sumToPay.medium } &#8381;</span>
                  <p>
                    4 вебинара, доступ в чат, ответы на вопросы в течение недели
                  </p>
                </div>
              </div>
              <div className={cn('col', this.state.blockState)} onClick={ this.updateState } id={this.sumToPay.hard} >
                <div className="testimonial">
                  <img src={require('./../../images/hard.jpg')} alt=""/>
                  <div className="name">Максимум</div>
                  <span className="price">{this.sumToPay.hard} &#8381;</span>
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
  }
  updateState = (event) => {
    if(this.props.needUpdateCurrentSum) {
      this.changeBlock(event);
      this.props.updateCurrentSum(event.currentTarget.id);
    }
  };
  changeBlock(event) {
    let currentBlock = event.currentTarget.id;
    let blockToChange;
    this.setState({
      blockState: {
        easy: '',
        medium: '',
        hard: '',
      }
    });
    if (currentBlock === this.sumToPay.easy) {
      blockToChange = 'easy';
    }
    if (currentBlock === this.sumToPay.medium) {
      blockToChange = 'medium';
    }
    if (currentBlock === this.sumToPay.hard) {
      blockToChange = 'hard';
    }
    this.setState({

    });
  }
}

export default Courses

