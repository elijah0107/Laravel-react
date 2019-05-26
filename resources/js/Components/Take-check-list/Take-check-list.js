import React, {Component, Fragment} from 'react'
import './Take-check-list.scss'

class TakeCheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenCheckListPopup: false,
      isButton: false,
    }
  };
  render() {
    return (
      <Fragment>
        {this.state.isOpenCheckListPopup && (
          <div className='container' onClick={this.closeCheckList}>
            <div className='check-list-form'>
              <form className='form-action'>
                <legend>Для получения чек листа введите ваши данные</legend>
                <div className='input'>
                  <label htmlFor=''>
                    Ваш e-mail
                  </label>
                  <input
                    onChange={this.onChange}
                    type='email'
                    required
                  />
                </div>
                <div className='input'>
                  <label htmlFor=''>
                    Ваше имя
                  </label>
                  <input
                    onChange={this.onChange}
                    type='name'
                    required
                  />
                </div>
                <button type='submit' className='submit-button' onClick={this.postData}>Отправить</button>
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
