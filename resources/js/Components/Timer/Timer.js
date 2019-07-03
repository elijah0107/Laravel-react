import React, { Component } from 'react';
import './Timer.scss';
import Timer from 'react-compound-timer';

class Countdown extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  render () {
    const now = new Date();
    const achieve = new Date(2019, 6, 30);
    let number = achieve - now;
    return (
      <Timer
        initialTime={number}
        direction='backward'
      >
        {() => (
          <div className='wrapper'>
            <div className='timer'>
              <h3>Старт следующего потока курса 30 июля</h3>
              <div className='time-to-left'>
                <div className='time'>
                  <Timer.Days /> <span className='time-name'>days</span>
                </div>
                <div className='time'>
                  <Timer.Hours /> <span className='time-name'>hours</span>
                </div>
                <div className='time'>
                  <Timer.Minutes /> <span className='time-name'>minutes</span>
                </div>
                <div className='time'>
                  <Timer.Seconds /> <span className='time-name'>seconds</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </Timer>
    );
  }
}
export default Countdown;
