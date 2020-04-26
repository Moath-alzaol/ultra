import React, { Component } from 'react';
import {Contact1 , Title , Flex , Insert , Form , Ginsert , Messege , Send} from './style.js'
import Footer from '../footer/footer'
class Contact extends Component {
  render(){
  return (
    <React.Fragment>
      <Contact1>
        <Title>Drop Me A line</Title>
        <Form>
          <Flex>
            <Insert type='text' placeholder="Your Name"/>
            <Insert type='text'placeholder="Your Email" />
          </Flex>
          <Ginsert type='text'  placeholder="Your Subject"/>
          <Messege type='text' placeholder="Your Messege" />
          <Send>Send Messege</Send>
        </Form> 
      </Contact1>
      <Footer />
    </React.Fragment>
    
  );
}
}

export default Contact;
