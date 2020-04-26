import React , {useState , useEffect} from 'react';
import {PortFolio ,Backg , Overlay ,OverlaySpan , Title , Top , Courses , Img1 , Pic } from './style.js'
import Axios from 'axios';

const  Port = () => {


 const [images , setImages] = useState([])

 useEffect ( () => {
 Axios.get('js/data.json').then( res => {
   
  setImages(res.data.portfolio) })
 }  , [] )

 const portImage1 = images.map( (imagee ) => {
   return (
    <Backg key={imagee.id}>
      <Pic src={imagee.image} alt="m" /><Overlay>
      <OverlaySpan>Show Image</OverlaySpan></Overlay>
    </Backg>
   )
 })



  return (
    <PortFolio>
      <Title>My Portfolio</Title>
       <Top>
         <Courses active>All</Courses>
         <Courses>HTML</Courses>
         <Courses>Photoshop</Courses>
         <Courses>Wordpress</Courses>
         <Courses>Mobile</Courses>
       </Top>
       <Img1>
       {portImage1}
       </Img1>
      


    </PortFolio>
  );
}

export default Port;
