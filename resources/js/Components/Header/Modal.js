import React from 'react'
import './Modal.scss'

const Modal = ({ openModalWindow, closeCheckList }) => {
  return (
    <div className='container' onClick={closeCheckList}>
      <div className="buy-popup hidden" id="popup">
        <div className="modal-checkout">
          <h2>Напишите нам и мы поможем вам выбрать курс и подскажем, как оплатить</h2>
        </div>
        <div className="close-and-buy">
          <form className="post-email">
            <div className="submit-and-close">
              <span className="social-chat">
                <a href="https://wa.me/79827147015">
                  <img src={require('./../../images/whatsapp-logo.png')} alt="whatsapp"/>
                </a>
                <a href="https://t.me/moiseeva_ma">
                  <img src={require('./../../images/telegram-logo.png')} alt="telegram"/>
                </a>
                <a href="https://viber://chat?number=79827147015">
                  <img src={require('./../../images/viber-logo.png')} alt="viber"/>
                </a>
              </span>
              <span className="js-close-popup close" onClick={openModalWindow}>&times;</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
export default Modal
