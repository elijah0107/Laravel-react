import React, { Component } from 'react';
import './CheckoutView.scss';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import { connectPost } from './Components/Common/connectApi';

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
      email: '',
      name: '',
      needRequiredCourses: '',
      needRequiredInput: '',
    };
    this.onChange = this.onChange.bind(this);
  }
  sum = '';

  /**
   *
   * @returns {*}
   */
  render () {
    const walletNumber = 410012712600459;
    return (
      <div>
        <Header needShowBlockMenu={false} />
        <div className={this.state.needRequiredCourses}>
          <Courses
            title='Выберите тариф и способ оплаты'
            smallSize='small-size'
            needUpdateCurrentSum={true}
            updateCurrentSum={this.updateCurrentSum}
          />
        </div>
        <div className='checkout-container'>
          <form method='POST'
            action='https://money.yandex.ru/quickpay/confirm.xml'
            className='checkout-form'>
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
            <div className={this.state.needRequiredInput}>
              <input
                onChange={this.onChange}
                name='phone'
                placeholder='Ваше телефон'
                value={this.state.phone}
              />
              <input
                onChange={this.onChange}
                name='name'
                placeholder='Вашя имя'
                value={this.state.name}
              />
            </div>
            {this.state.errors && (
              <div className='error'>
                {this.state.errors}
              </div>
            )}
            <input type='submit' value='Оплатить' onClick={this.validateOrder} className='button-submit'/>
          </form>
        </div>
      </div>
    );
  }

  validateOrder = (e) => {
    const errorMessage = 'Пожалуйста заполните выделенные поля';
    const phone = this.state.phone;
    const name = this.state.name;
    const user = {
      phone,
      name,
    };
    if (!this.sum) {
      e.preventDefault();
      this.setState({
        errors: errorMessage,
        needRequiredCourses: 'required',
      });
    }
    if (!this.state.name || !this.state.phone) {
      e.preventDefault();
      this.setState({
        errors: errorMessage,
        needRequiredInput: 'required',
      });
    }
    connectPost('api/order', user).then(response => {
      if (response) {
        console.log(response);
      }
    });
    return true;
  };

  onChange (e) {
    this.setState({
      needRequiredInput: '',
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
