import React, { Component } from 'react';
import './Take-check-list.scss';
import { connectPost } from '../Common/connectApi';
import { sendToTelegram } from '../Common/sendToTelegram';

class TakeCheckList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpenCheckListPopup: false,
      isButton: false,
      email: '',
      name: '',
      errors: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  render () {
    return (
      <>
        {this.state.isOpenCheckListPopup && (
          <div className='container' onClick={this.closeCheckList}>
            <div className='check-list-form'>
              <form className='form-action' noValidate onSubmit={this.onTestSubmit}>
                <legend>Для получения шпаргалки введите ваши данные</legend>
                <div className='input'>
                  <label htmlFor=''>
                    Ваш e-mail
                  </label>
                  <input
                    onChange={this.onChange}
                    required
                    name='email'
                    placeholder='Ваш e-mail'
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
                {this.state.errors && (
                  <div className='error-message'>{this.state.errors}</div>
                )}
                <button type='submit' className='submit-button' >Отправить</button>
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
      </>
    );
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onTestSubmit = e => {
    e.preventDefault();
    const email = this.state.email;
    const name = this.state.name;
    const user = {
      email,
      name,
    };
    connectPost('api/notice', user)
      .then(response => {
        const data = response && response.data || {};
        if (data.error) {
          this.setState({ errors: data.callbackMessage });
          return;
        }
        if (!data.user_exist) {
          this.send();
        }
        this.setState({ errors: data.callbackMessage });
      });
  };
  send = () => {
    const email = this.state.email;
    const name = this.state.name;
    const user = {
      email,
    };
    const closeAndRemove = () => {
      this.setState({ isOpenCheckListPopup: false });
      this.setState({ errors: '' });
    };
    const message = `Кто-то заказал шпаргалку имя: ${name}%0Aпочта: ${email}`;
    connectPost('api/send', user)
      .then(response => {
        const data = response && response.data || {};
        if(data.has_send) {
          setTimeout(closeAndRemove, 2000);
          sendToTelegram(message);
        }
        this.setState({ errors: data.callbackMessage });
      })
      .catch(err => {
        console.log(err);
      });
  };

  openCheckList = () => {
    this.setState({ isOpenCheckListPopup: !this.state.isOpenCheckListPopup });
  };
  closeCheckList = ({ target, currentTarget }) => {
    window.location.hash = '';
    if (target === currentTarget) {
      this.setState({ isOpenCheckListPopup: !this.state.isOpenCheckListPopup });
    }
  };
  closeButton = () => {
    this.setState({ isButton: !this.state.isButton });
  }
}

export default TakeCheckList;
