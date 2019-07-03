import React, { Component } from 'react';
import './Footer.scss';
import Modal from '../Header/Modal';

class Footer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false,
      modalIsShow: false,
    };
  }

  render () {
    return (
      <footer className='footer' id='contacts'>
        <div className='footer-block'>
          <div className='contacts'>
            <div className='social-networks'>
              <a href='https://vk.com/think_about_eat'>
                <img src={require('./../../images/vk-logo.png')} alt='' className='social-image'/>
              </a>
            </div>
            <div className='social-networks'>
              <a href='https://www.instagram.com/think_about_eat/'>
                <img src={require('./../../images/insta-logo.png')} alt='' className='social-image'/>
              </a>
            </div>
          </div>
          <div className='logo'>
            <img src={require('./../../images/logo.jpg')} alt=''/>
          </div>
          <div className='block-menu'>
            <ul className={this.state.isOpen ? 'menu menu_active' : 'menu'}>
              <li>
                <a className='buy' href='/checkout'>купить</a>
              </li>
              <li><a href='#about-me' data-hover='обо мне' className='menu-link'>обо мне</a></li>
              <li><a href='#about-courses' data-hover='тарифы' className='menu-link'>тарифы</a></li>
              <li><a href='#teach' data-hover='о школе' className='menu-link'>о школе</a></li>
              <li><a href='#reviews' data-hover='отзывы' className='menu-link'>отзывы</a></li>
            </ul>
            <a href={void (0)}
              className={this.state.isOpen ? 'button-menu button-menu_active' : 'button-menu'}
              onClick={this.openFooterMenu}
            >
              <span className='burger-button'/>
            </a>
          </div>
        </div>
        {this.state.modalIsShow && (
          <Modal
            openModalWindow={this.openModalWindow}
            closeCheckList={this.closeCheckList}
          />
        )}
      </footer>
    );
  }

  openFooterMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  openModalWindow = () => {
    this.setState({ modalIsShow: !this.state.modalIsShow });
  };
  closeCheckList = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.setState({ modalIsShow: !this.state.modalIsShow });
    }
  };
}

export default Footer;
