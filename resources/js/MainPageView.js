import React, {Component, Fragment} from 'react';
import './MainPageView.scss';
import Header from './Components/Header/Header';
import Motto from "./Components/Motto/Motto";
import AboutMe from "./Components/About-me/About-me";
import WhatITeach from "./Components/What-I-teach/What-I-teach";
import { Route, Switch } from 'react-router-dom'
import SlideView from "./Components/Reviews/Reviews";
import Courses from "./Components/Courses/Courses";
import WhoCanNot from "./Components/Who-can-not/Who-can-not";
import Footer from "./Components/Footer/Footer";
import TakeCheckList from "./Components/Take-check-list/Take-check-list";
import CheckoutView from './CheckoutView';

class MainPageView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return (
      <>
        <Header needShowBlockMenu={true} />
        <TakeCheckList/>
        <Motto/>
        <AboutMe/>
        <WhatITeach/>
        <SlideView/>
        <Courses
          needShowTitle={true}
          smallSize=''
          needUpdateCurrentSum={false}
        />
        <WhoCanNot/>
        <Footer/>
      </>
    )
  }


}

export default MainPageView;
