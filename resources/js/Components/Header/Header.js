import React, { Component } from 'react';
import './Header.scss';
import Modal from './Modal';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false,
      modalIsShow: false,
    };
  }

  render () {
    const { needShowBlockMenu } = this.props;
    return (
      <header className='header'>
        <div className='header-block'>
          <a href='/'>
            <div className='logo'>
              <img src={require('./../../images/logo.jpg')} alt=''/>
            </div>
          </a>
          { needShowBlockMenu && (
            <div className='block-menu'>
              <ul className={this.state.isOpen && !this.state.modalIsShow ? 'menu menu_active' : 'menu'}>
                <li>
                  <a className='buy' href='/checkout'>купить</a>
                </li>
                <li><a href='#about-me' data-hover='обо мне' className='menu-link' onClick={this.slowScroll}>обо мне</a></li>
                <li><a href='#about-courses' data-hover='тарифы' className='menu-link' onClick={this.slowScroll}>тарифы</a></li>
                <li><a href='#about-school' data-hover='о школе' className='menu-link' onClick={this.slowScroll}>о школе</a></li>
                <li><a href='#reviews' data-hover='отзывы' className='menu-link' onClick={this.slowScroll}>отзывы</a></li>
              </ul>
              <a href={void (0)}
                className={this.state.isOpen ? 'button-menu button-menu_active' : 'button-menu'}
                onClick={this.openHeaderMenu}
              >
                <span className='burger-button'/>
              </a>
            </div>
          )}
        </div>
        {this.state.modalIsShow && (
          <Modal
            openModalWindow={this.openModalWindow}
            closeCheckList={this.closeCheckList}
          />
        )}

      </header>
    );
  }

  openHeaderMenu = () => {
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

  slowScroll = event => {
    event.preventDefault();
    const id  = event.target.attr('href'),
      top = id.offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  }
}

export default Header;
