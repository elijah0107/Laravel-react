import React, { Component } from 'react';
import './CheckoutView.scss'
import Header from "./Components/Header/Header";
import Courses from "./Components/Courses/Courses";

class MainPageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: '',
      needDisabled: '',
    }
  };
  sum = '';

  componentDidMount() {
    if (this.sum == '') {
      this.setState({needDisabled: 'disabled'})
    }
  }

  render() {
    const walletNumber = 410012712600459;
    const {

    } = this.props;
    return (
      <>
        <Header needShowBlockMenu={false} />
        <Courses
          title='Выберите тариф и способ оплаты'
          smallSize='small-size'
          needUpdateCurrentSum={true}
          updateCurrentSum={this.updateCurrentSum}
        />
        <div className='checkout-container'>
          <form method="POST"
                action="https://money.yandex.ru/quickpay/confirm.xml"
                className="checkout-form">
            <input type="hidden" name="receiver" value={walletNumber}/>
            <input type="hidden" name="formcomment" value="text"/>
            <input type="hidden" name="short-dest" value="test"/>
            <input type="hidden" name="label" value="$order_id"/>
            <input type="hidden" name="quickpay-form" value="donate"/>
            <input type="hidden" name="targets" value="транзакция {order_id}"/>
            <input type="hidden" name="sum" value={this.sum} data-type="number"/>
            <input type="hidden" name="comment" value=""/>
            <input type="hidden" name="need-fio" value="true"/>
            <input type="hidden" name="need-email" value="true"/>
            <input type="hidden" name="need-phone" value="false"/>
            <input type="hidden" name="need-address" value="false"/>
            <div className='payment-type'>
              <input type="radio" name="paymentType" value="AC" id="payment-visa" defaultChecked />
              <label className='label' htmlFor='payment-visa'>Банковской картой</label>
              <input type="radio" name="paymentType" value="PC" id="payment-yandex" />
              <label className='label' htmlFor="payment-yandex">Яндекс.Деньгами</label>
            </div>
            <input type="submit" value="Оплатить" className='button-submit' disabled={this.state.needDisabled}/>
          </form>
        </div>
      </>
    )
  };

  updateCurrentSum = (value) => {
    this.sum = value;
    this.setState(prevState => ({
      defaultValue: prevState.defaultValue = value,
      needDisabled: '',
    }));
  };
}


  export default MainPageView;
