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
      errors: '',
      needShowAgainButton: false,
      stopAnimation: '',
    };
  }
  render () {
    const {
      onChangeEmail,
      onChangeName,
      email,
      name,
      onSubmit,
      error,
      data,
    } = this.props;
    const {
      callbackMessage,
      error: callbackError,
      user_exist: userExist,
    } = data || {};
    return (
      <>
        {this.state.isOpenCheckListPopup && (
          <div className='container' onClick={this.closeCheckList}>
            <div className='check-list-form'>
              <div className='form-action'>
                <legend>Для получения шпаргалки введите ваши данные</legend>
                <div className='input'>
                  <label htmlFor=''>
                    Ваш e-mail
                  </label>
                  <input
                    onChange={onChangeEmail}
                    required
                    name='email'
                    placeholder='e-mail'
                    value={email}
                  />
                </div>
                <div className='input'>
                  <label htmlFor=''>
                    Ваше имя
                  </label>
                  <input
                    onChange={onChangeName}
                    required
                    name='name'
                    placeholder='имя'
                    value={name}
                  />
                </div>
                {(error || callbackMessage) && (
                  <div className='error-message'>{error || callbackMessage}</div>
                )}
                <button type='submit' className='submit-button' onClick={onSubmit}>Отправить</button>
                {userExist && (
                  <button type='submit' className='submit-button again-button' onClick={this.againSend}>Отправить ещё раз</button>
                )}
              </div>
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
