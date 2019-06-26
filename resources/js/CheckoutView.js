import React, { Component } from 'react';
import './CheckoutView.scss';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import { connectPost } from './Components/Common/connectApi';
import { sendToTelegram } from './Components/Common/sendToTelegram';
import cn from 'classnames';

/**
 *
 */
class MainPageView extends Component {
  /**
   *
   * @param props
   */
  constructor (props) {
    super(props);
    this.state = {
      defaultValue: '',
      phone: '',
      name: '',
      needRequiredCourses: '',
      needRequiredInputName: '',
      needRequiredInputPhone: '',
    };
    this.onChange = this.onChange.bind(this);
    this.validateOrder = this.validateOrder.bind(this);
  }
  sum = '';

  /**
   *
   * @returns {*}
   */
  render () {
    const walletNumber = 410012712600459;
    return (
      <>
        <Header needShowBlockMenu={false} />
        <div className={cn('checkout-courses', this.state.needRequiredCourses)}>
          <Courses
            title='Выберите тариф и способ оплаты'
            smallSize='small-size'
            needUpdateCurrentSum={true}
            updateCurrentSum={this.updateCurrentSum}
            hideOpinion='hide-opinion'
          />
        </div>
        <div className='checkout-container'>
          <form method='POST'
            action='https://money.yandex.ru/quickpay/confirm.xml'
            className='checkout-form'
            onSubmit={this.validateOrder}
          >
            <input type='hidden' name='receiver' value={walletNumber}/>
            <input type='hidden' name='formcomment' value='text'/>
            <input type='hidden' name='short-dest' value='test'/>
            <input type='hidden' name='label' value='$order_id'/>
            <input type='hidden' name='quickpay-form' value='donate'/>
            <input type='hidden' name='targets' value='транзакция {order_id}'/>
            <input type='hidden' name='sum' value={this.sum} data-type='number'/>
            <input type='hidden' name='comment' value=''/>
            <input type='hidden' name='need-fio' value='true'/>
            <input type='hidden' name='need-email' value='true'/>
            <input type='hidden' name='need-phone' value='false'/>
            <input type='hidden' name='need-address' value='false'/>
            <div className='payment-type'>
              <input type='radio' name='paymentType' value='AC' id='payment-visa' defaultChecked />
              <label className='label' htmlFor='payment-visa'>Банковской картой</label>
              <input type='radio' name='paymentType' value='PC' id='payment-yandex' />
              <label className='label' htmlFor='payment-yandex'>Яндекс.Деньгами</label>
            </div>
            <div>
              <input
                onChange={this.onChange}
                name='phone'
                placeholder='Ваше телефон'
                value={this.state.phone}
                className={this.state.needRequiredInputPhone}
              />
              <input
                onChange={this.onChange}
                name='name'
                placeholder='Вашя имя'
                value={this.state.name}
                className={this.state.needRequiredInputName}
              />
            </div>
            {this.state.errors && (
              <div className='error'>
                {this.state.errors}
              </div>
            )}
            <input type='submit' value='Оплатить' className='button-submit'/>
          </form>
        </div>
      </>
    );
  }

  validateOrder (e) {
    const errorMessage = 'Пожалуйста заполните выделенные поля';
    const phone = this.state.phone;
    const name = this.state.name;
    const user = {
      phone,
      name,
    };
    let isValid = true;
    const message = `Был осуществлен заказ на сайте%0Aимя: ${name}%0Aтелефон: ${phone}`;
    if (!this.sum) {
      e.preventDefault();
      this.setState({
        errors: errorMessage,
        needRequiredCourses: 'required',
      });
      isValid = false;
    }
    if (!this.state.name) {
      e.preventDefault();
      this.setState({
        errors: errorMessage,
        needRequiredInputName: 'required',
      });
      isValid = false;
    }
    if (!this.state.phone) {
      e.preventDefault();
      this.setState({
        errors: errorMessage,
        needRequiredInputPhone: 'required',
      });
      isValid = false;
    }
    if (isValid) {
      sendToTelegram(message);
    }
    connectPost('api/order', user).then(response => {
      const data = response && response.data || {};
      console.log(data);
    });
  }

  onChange (e) {
    this.setState({
      needRequiredInputName: '',
      needRequiredInputPhone: '',
      errors: '',
      [e.target.name]: e.target.value,
    });
  }

  updateCurrentSum = (value) => {
    this.setState({  needRequiredCourses: '' });
    this.sum = value;
  };
}

export default MainPageView;
