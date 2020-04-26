import styled from 'styled-components'




export const Navbars =styled.div`
border-bottom: 1px solid black;
padding: 25px;
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.div`
    font-size: 30px;
    font-family: auto;
    font-weight: bold
`
export const UlList =styled.div`
    width: 50%;
    list-style: none;
    display: flex;
    justify-content: space-between;
`
export const LiList = styled.div` 
        padding: 10px 15px;
        font-weight: 600;
        font-family: auto;
`
export const Anchor = styled.a`
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: 600;
    font-family: auto;

    &:hover{
        color:#eb5424
    }
`

// export const Linka = styled.Link`
//     color: #222;
//     text-decoration: none;
//     padding: 10px 15px;
//     font-weight: 600;
//     font-family: auto;

//     &:hover{
//         color:#eb5424
//     }
