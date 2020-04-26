import React, { Component } from 'react';
import Home from '../home/home';
import About from '../about/about';
import Port from '../portfolio/port';
import Profile from '../profile/profile';
import Work from '../work/work';
import Social from '../social/social';
import Footer from '../footer/footer';





class Index extends Component {
  render(){
  return (
    <div>
     <Home />
     <Work />
     <Port />
     <Profile />
     <About />
     <Social />
     <Footer />
    </div>
  );
}
}

export default Index;
