import React, { Component } from 'react';
// import{Link} from 'react-router-dom';
import {Navbars , Logo , Flex  , UlList , LiList , Anchor} from './style';

class Navbar extends Component {
  render(){
  return (
    <Navbars>
      <div className='container'>
        <Flex>
          <Logo>Ultra Profile</Logo>
          <UlList>
            <LiList><Anchor href='/' >Home</Anchor></LiList>
            <LiList><Anchor href='#'>Work</Anchor></LiList>
            <LiList><Anchor href='#'>Portfolio</Anchor></LiList>
            <LiList><Anchor href='#'>Resume</Anchor></LiList>
            <LiList><Anchor href='#'>About</Anchor></LiList>
            <LiList><Anchor href='/contact' >contact</Anchor></LiList>
          </UlList>
        </Flex>
        
      </div>
     
    </Navbars>
     
  );
}
}

export default Navbar;
