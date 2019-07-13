import React, { Component } from 'react';
import './Take-check-list.scss';
import { connectPost } from '../Common/connectApi';
import { sendToTelegram } from '../Common/sendToTelegram';
import cn from 'classnames';

class TakeCheckList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpenCheckListPopup: false,
      isButton: false,
      email: '',
      name: '',
      errors: '',
      needShowAgainButton: false,
      stopAnimation: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  render () {
    return (
      <>
        {this.state.isOpenCheckListPopup && (
          <div className='container' onClick={this.closeCheckList}>
            <div className='check-list-form'>
              <form className='form-action' noValidate >
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
                <button type='submit' className='submit-button' onClick={this.onTestSubmit}>Отправить</button>
                {this.state.needShowAgainButton && (
                  <button type='submit' className='submit-button again-button' onClick={this.againSend}>Отправить ещё раз</button>
                )}
              </form>
            </div>
          </div>
        )}
        {!this.state.isButton && !this.state.isOpenCheckListPopup && (
          <button className={cn('button-check-list', this.state.stopAnimation)} onClick={this.openCheckList}>Получить шпаргалку 'Почему я не
            худею?'</button>
        )}
        {!this.state.isButton && !this.state.isOpenCheckListPopup && (
          <span className={cn('close-button', this.state.stopAnimation)} onClick={this.closeButton}>&times;</span>
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
        if (data.user_exist) {
          this.setState({
            errors: data.callbackMessage,
            needShowAgainButton: true,
          });
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
        if (data.has_send) {
          setTimeout(closeAndRemove, 4000);
          sendToTelegram(message);
        }
        this.setState({ errors: data.callbackMessage });
      })
      .catch(err => {
        console.log(err);
      });
  };

  againSend = (e) => {
    const email = this.state.email;
    const user = {
      email,
    };
    e.preventDefault();

    connectPost('api/send', user)
      .then(response => {
        const data = response && response.data || {};
        if (data.has_send) {
          this.setState({
            errors: data.callbackMessage,
            needShowAgainButton: false,
          });
          setTimeout(() => {
            this.setState({
              isOpenCheckListPopup: false,
            });
          },2000);
        }
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
      this.setState({
        isOpenCheckListPopup: !this.state.isOpenCheckListPopup,
        stopAnimation: 'stop-animation',
      });
    }
  };
  closeButton = () => {
    this.setState({
      isButton: !this.state.isButton,
      stopAnimation: 'stop-animation',
    });
  }
}

export default TakeCheckList;
