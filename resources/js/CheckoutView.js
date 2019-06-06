import React, {Component, Fragment} from 'react';
import './CheckoutView.scss'
import Header from "./Components/Header/Header";

class MainPageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: 1,
      defaultSpan: '',
    }
  };

  render() {
    const walletNumber = 410012712600459;
    const {

    } = this.props;
    let sum;
    return (
      <>
        <Header/>
        <div className='checkout-container'>
          <form method="POST" action="https://money.yandex.ru/quickpay/confirm.xml" className="checkout-form">
            <input type="hidden" name="receiver" value={walletNumber}/>
            <input type="hidden" name="formcomment" value="text"/>
            <input type="hidden" name="short-dest" value="test"/>
            <input type="hidden" name="label" value="$order_id"/>
            <input type="hidden" name="quickpay-form" value="donate"/>
            <input type="hidden" name="targets" value="транзакция {order_id}"/>
            <input type="hidden" name="sum" value={sum} data-type="number"/>
            <input type="hidden" name="comment" value=""/>
            <input type="hidden" name="need-fio" value="true"/>
            <input type="hidden" name="need-email" value="true"/>
            <input type="hidden" name="need-phone" value="false"/>
            <input type="hidden" name="need-address" value="false"/>
            {this.span && (
              <div>{<span>{this.state.defaultSpan}</span>}</div>
            )}
            <div className='change-sum'>
              <span className='value' onClick={this.changeDefaultValue} id={1}>Базовый 1999 р</span>
              <span className='value' onClick={this.changeDefaultValue} id={2}>Продвинутый 2999 р</span>
              <span className='value' onClick={this.changeDefaultValue} id={3}>Максимум 4999 р</span>
            </div>
            <label><input type="radio" name="paymentType" value="PC"/>Яндекс.Деньгами</label>
            <label><input type="radio" name="paymentType" value="AC"/>Банковской картой</label>
            <input type="submit" value="Оплатить"/>
          </form>
        </div>
      </>
    )
  };
  changeDefaultSum() {

  }

  changeDefaultValue = event => {
    this.span = event.target;
    this.span.id = event.target.id;
    this.setState({
      defaultValue: this.span.id,
      defaultSpan: this.span,
    });
  };
}

export default MainPageView;
