import React, {Component} from 'react';
import './MainPageView.scss';
import Header from './Components/Header/Header';
import Motto from "./Components/Motto/Motto";
import AboutMe from "./Components/About-me/About-me";
import WhatITeach from "./Components/What-I-teach/What-I-teach";
import { Route } from 'react-router-dom'
import SlideView from "./Components/Reviews/Reviews";
import Courses from "./Components/Courses/Courses";
import WhoCanNot from "./Components/Who-can-not/Who-can-not";
import Footer from "./Components/Footer/Footer";
import TakeCheckList from "./Components/Take-check-list/Take-check-list";

class MainPageView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return (
      <div>
        <Header/>
        <TakeCheckList/>
        <Route>
          <Motto/>
        </Route>
        <AboutMe/>
        <WhatITeach/>
        <SlideView/>
        <Courses/>
        <WhoCanNot/>
        <Footer/>
      </div>
    )
  };


}

export default MainPageView;
