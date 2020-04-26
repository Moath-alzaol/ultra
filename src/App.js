import React, { Component } from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom'
import Nav from './component/navbar/navbar';
import Index from './component/index/index';
import Contact from './component/contact/contact';
/// yarn add axios styles-components --save 



class App extends Component {
  render(){
  return (
    <div className="App">
     <BrowserRouter>
        <Nav />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
     </BrowserRouter>
    </div>
  );
}
}

export default App;
