import React, { Component } from 'react';
import {Homes , Title , MainTitle , Info , InfoMid , Begin , All} from  './style.js'
class Home extends Component {
  render(){
  return (
    <Homes>
      <All>
        <MainTitle>Moath Al-Zoul</MainTitle>
        <Title>Creative Director</Title>
        <Info>Iam a professional <InfoMid>UX Designer</InfoMid> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.</Info>
        <Begin>Let's Begin</Begin>
      </All>
     
    </Homes>
  );
}
}

export default Home;
