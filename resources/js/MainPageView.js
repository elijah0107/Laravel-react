import React, { Component } from 'react';
import './MainPageView.scss';
import Header from './Components/Header/Header';
import Motto from './Components/Motto/Motto';
import AboutMe from './Components/About-me/About-me';
import WhatITeach from './Components/What-I-teach/What-I-teach';
import SlideView from './Components/Reviews/Reviews';
import Courses from './Components/Courses/Courses';
import WhoCanNot from './Components/Who-can-not/Who-can-not';
import Footer from './Components/Footer/Footer';
import TakeCheckList from './Components/Take-check-list/Take-check-list';

/**
 *
 */
class MainPageView extends Component {
  /**
   *
   * @param props
   */
  constructor (props) {
    super(props);
    this.state = {};
  }

  /**
   *
   * @returns {*}
   */
  render () {
    return (
      <div>
        <Header needShowBlockMenu={true} />
        <TakeCheckList/>
        <Motto/>
        <AboutMe/>
        <WhatITeach/>
        <SlideView/>
        <Courses
          title='Мои курсы'
          smallSize=''
          needUpdateCurrentSum={false}
        />
        <WhoCanNot/>
        <Footer/>
      </div>
    );
  }

}

export default MainPageView;
