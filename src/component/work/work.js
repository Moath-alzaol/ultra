import React, { Component } from 'react';
import {Title , InsideTitle ,Icon ,Desc , Parts ,PearntParts ,Line} from './style.js';
import Axios from 'axios';

class Work extends Component {
  state = {
    works:[]
  }

  componentDidMount  ()  {
    Axios.get('js/data.json').then(res => {
      // console.log(res.data.works);
      this.setState({
        works : res.data.works
      })
      
    })
  }
  render(){
    const {works} = this.state
    const workList = works.map((work) => {
      return (
        <Parts key={work.id}>
          <Icon className={work.icon_name} />
          <InsideTitle>{work.title}</InsideTitle>
          <Line />
          <Desc>{work.body}</Desc>
        </Parts>
      )
    })
  return (
    <div className='container'>
      <Title>My Work</Title>
      <PearntParts>
      {workList}
      </PearntParts>
    </div>
  );
}
}

export default Work;
