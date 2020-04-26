import styled from 'styled-components'

export const Title = styled.h2`
    font-size: 60px;
    font-family:auto ;

`
export const PearntParts =styled.div`
    display: flex;
    justify-content: space-around;
`
export const Parts=styled.div` 
margin-top: 20px;
    width: 30%;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: ${props => props.first === 1 ? '0' : '20px'}
`
export const Line=styled.hr`
width: 60%;
margin: auto;
`
export const InsideTitle =  styled.h3` 
    font-family:auto ;
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
`
export const Icon = styled.i`
    color: #888;
`
export const Desc =styled.p`
    font-family:auto ;
    font-size: 14px;
    color: #888;
    padding: 20px
`