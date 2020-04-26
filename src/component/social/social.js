import React, { useState , useEffect } from 'react';
import {Social1 , Media , Icon , Des , Des1} from './style.js'
import axios from 'axios';

const  Social = () => {
  
  const [social , setSocial] = useState([]);
  
  useEffect (() => {
    axios.get('js/data.json').then( res => {
      setSocial(res.data.social)
    })
   } , []) 


   const media = social.map( item => {
     return(
      <Media key={item.id} id={item.id}>
        <Icon className={item.icon}></Icon>
     <Des><Des1>{item.title}</Des1> <Des1>{item.body}</Des1></Des>
    </Media>
     )
   })
  return (
    <Social1>
      {media}
    </Social1>
  );
}


export default Social;
