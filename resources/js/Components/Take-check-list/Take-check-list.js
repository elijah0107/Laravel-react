import React, {Component, Fragment} from 'react'
import './Take-check-list.scss'
import { connect, sendEmail } from './connectApi'

class TakeCheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenCheckListPopup: false,
      isButton: false,
      email: '',
      name: '',
      errors: '',
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.isOpenCheckListPopup && (
          <div className='container' onClick={this.closeCheckList}>
            <div className='check-list-form'>
              <form className='form-action' onSubmit={this.onSubmit}>
                <legend>Для получения чек листа введите ваши данные</legend>
                <div className='input'>
                  <label htmlFor=''>
                    Ваш e-mail
                  </label>
                  <input
                    onChange={this.onChange}
                    required
                    name='email'
                    placeholder='Ваше e-mail'
                    value={this.state.email}
                  />
                </div>
                <div className='input'>
                  <label htmlFor=''>
                    Ваше имя
                  </label>
                  <input
                    onChange={this.onChange}
                    required
                    name='name'
                    placeholder='Ваше имя'
                    value={this.state.name}
                  />
                </div>
                <button type='submit' className='submit-button' >Отправить</button>
                {this.state.errors && (
                  <div>{this.state.errors}</div>
                )}
              </form>
            </div>
          </div>
        )}
        {!this.state.isButton && !this.state.isOpenCheckListPopup && (
          <button className='button-check-list' onClick={this.openCheckList}>Получить шпаргалку 'Почему я не
            худею?'</button>
        )}
        {!this.state.isButton && !this.state.isOpenCheckListPopup && (
          <span className='close-button' onClick={this.closeButton}>&times;</span>
        )}
        {this.state.isButton && (
          <span className='open-button' onClick={this.closeButton}>&raquo;</span>
        )}
      </Fragment>
    )
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      name: this.state.name,
    };
    let needToSend = false;
    connect(user).then(res => {
      this.setState({ errors: res });
      if (res) {
        needToSend = true;
      }
      console.log(needToSend)
    });
    if (needToSend) {
      // this.send();
    }
  };
  send = () => {
    const user = {
      email: this.state.email,
    };
    sendEmail(user).then(res => {
      if(res) {
        console.log('email отправлен')
      }
    });
  };
  openCheckList = () => {
    this.setState({isOpenCheckListPopup: !this.state.isOpenCheckListPopup})
  };
  closeCheckList = ({target, currentTarget}) => {
    window.location.hash = '';
    if (target === currentTarget) {
      this.setState({isOpenCheckListPopup: !this.state.isOpenCheckListPopup});
    }
  };
  closeButton = () => {
    this.setState({isButton: !this.state.isButton})
  }
}

export default TakeCheckList
