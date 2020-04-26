import React, { Component } from 'react';
import {About1 , Left , Title , Title1 , Des} from './style.js'
class About extends Component {
  render(){
  return (
    <About1>
      <div className="container">
        <Left>
          <Title>This is Me</Title>
          <Title1>Creative Director</Title1>
          <Des>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?</Des>
          <Des>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?</Des>
        </Left>
      </div>
    </About1>
  );
}
}

export default About;
