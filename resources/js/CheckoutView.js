import React, { Component } from 'react';
import './CheckoutView.scss'
import Header from "./Components/Header/Header";
import Courses from "./Components/Courses/Courses";

class MainPageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: '',
    }
  };
  sum = '';
  render() {
    const walletNumber = 410012712600459;
    const {

    } = this.props;
    return (
      <>
        <Header needShowBlockMenu={false} />
        <Courses
          needShowTitle={false}
          smallSize='small-size'
          needUpdateCurrentSum={true}
          updateCurrentSum={this.updateCurrentSum}
        />
        <div className='checkout-container'>
          <form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml" className="checkout-form">
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
            <label><input type="radio" name="paymentType" value="PC"/>Яндекс.Деньгами</label>
            <label><input type="radio" name="paymentType" value="AC"/>Банковской картой</label>
            <input type="submit" value="Оплатить"/>
          </form>
        </div>
      </>
    )
  };
  updateCurrentSum = (value) => {
    this.sum = value;
    this.setState(prevState => ({ defaultValue: prevState.defaultValue = value }));
  };
}


  export default MainPageView;
