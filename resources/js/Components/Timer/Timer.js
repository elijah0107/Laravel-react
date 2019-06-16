import React, { Component } from 'react'
import './Timer.scss'
import Timer from 'react-compound-timer'

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };
  render() {
    const now = new Date();
    const achieve = new Date(2019, 7, 30);
    let number = achieve - now;
    number = number/1.6;
    return (
        <Timer
          initialTime={number}
          direction="backward"
        >
          {() => (
            <div className='timer'>
              <h3>Старт следующего потока курса</h3>
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
              <h3>30 июля</h3>
            </div>
          )}
        </Timer>
    )
  };
}
export default Countdown