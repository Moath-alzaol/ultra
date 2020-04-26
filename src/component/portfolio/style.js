import styled from 'styled-components'

export const  PortFolio =styled.div`{
    background: #f8f8f8;
    padding-top: 20px; 
`
export const  Title =styled.h2 `
    text-align: center;
    font-size: 35px;
    font-family: auto;
`

export const  Top=styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: auto;
    text-align: center;
    padding: 10px
`
export const  Courses =styled.div`{
    width: 100px;
    padding: 10px;
    font-family: auto;
    background:${props => props.active ?  '#eb5424' : ''};
    color:${props => props.active ?  '#fff' : '#000'}
    
`

export const  Img1=styled.div`
    display: flex;
    flex-wrap:wrap
`
export const  Img2=styled.div`
    display: flex;
`
export const   Pic =styled.img`
width: 100%;
height: 100%;
`




export const  Overlay =styled.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
    margin:0px

`
export const  OverlaySpan=styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
`
export const  Backg=styled.div`
    position: relative;
    width:25%;
    &:hover >  p {
        opacity: 1
    }
`
export const  Pbackg=styled.p`
    margin: 0px;
`
