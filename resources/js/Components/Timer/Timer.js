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
    const achieve = new Date(2019, 7, 4, 16);
    const time = achieve - now;
    return (
      <>
        {time > 0 ? (
          <Timer
            initialTime={time}
            direction='backward'
          >
            {() => (
              <div className='wrapper wow fadeInLeft'>
                <div className='timer'>
                  <h3>Старт следующего потока курса 4 августа</h3>
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
        ) : (
          <div className='wrapper'>
            <div className='timer'>
              <h3>Курс уже начался, скоро откроется другой</h3>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default Countdown;
