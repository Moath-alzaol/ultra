import styled from 'styled-components'

export const Homes = styled.div` 
    height: 500px;
    background: url('../images/Home/home-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`
export const All = styled.div`
    position : relative;
    top : 100px
`
export const MainTitle = styled.h1` 
font-family: auto;

    font-size: 60px;
    margin: 0;

    font-weight: bold;
    color: #5e5e5e;
`
export const  Title = styled.h2` 
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
`
export const Info =styled.p`  
   
    width: 55%;
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin: auto;
    margin-bottom: 20px;
`
export const InfoMid = styled.span` 
    color: #000
`
export const Begin = styled.button` 
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold

    &:hover {
        background: #fff;
        color: #eb5424
    }
 `

