import React, { Component } from 'react';
import {ProfileS , LeftSide , RightSide ,LeftTitle , Details , Bold , RightTitle , RightP ,Course ,Flex , Range ,RangeChild1 } from './style.js'
import axios from 'axios'

class Profile extends Component {
  state = {
    profile1 : [] ,
    profile2 :[]
  }

componentDidMount () {
  axios.get('js/data.json').then( res => {
    this.setState({
      profile1 : res.data.profile1
    })
    
  })
  axios.get('js/data.json').then( res => {
    this.setState({
      profile2 : res.data.profile2
    })
  })
}




  render(){
    const {profile1} = this.state
    const {profile2} = this.state
   const detail1 = profile1.map(info1 => {
      return (
            <Details key={info1.id}>
              <Bold>{info1.type}</Bold><span>{info1.equl}</span>
            </Details>
      )
    } )

  const  detail2 = profile2.map(info2 => {
      return (
        <Course key={info2.id}>
            <Flex>
             <span>{info2.name}</span> <span>{info2.parcent}</span> 
            </Flex>
            <Range>
              <RangeChild1 parcent={info2.parcent}></RangeChild1>
            </Range>
        </Course>
      )
    } )
  return (
    <div className="container">
        <ProfileS>
      <LeftSide>
        <LeftTitle>My Profile</LeftTitle>
        {detail1}
      </LeftSide>      
      <RightSide>
        <RightTitle>Some skills</RightTitle>
        <RightP>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique</RightP>
        {detail2}
        
      </RightSide>      
    </ProfileS>
    </div>

  );
}
}

export default Profile;
