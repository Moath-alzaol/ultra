import styled from 'styled-components'


export const ProfileS = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: auto;
`
export const LeftSide = styled.div`
    width: 100%;
`
export const RightSide = styled.div`
    width: 100%;

`
export const LeftTitle = styled.h2`
 font-size: 40px;
`
export const Details  = styled.div`
    margin-bottom: 8px;
    display : flex;
`
export const Bold = styled.span`
    font-weight: bold;
    width: 150px;

`
export const RightTitle  = styled.h2`
    font-size: 40px;
`
export const RightP  = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
export const Course  = styled.div`
margin-bottom: 15px;
`
export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Range = styled.div`
    width: 100%;
    background-color: silver;
    height: 2px;
`
export const RangeChild1  = styled.div`
    background-color: orangered;
    height: 2px;
    width : ${props => props.parcent === "90%" ? '90%' : props.parcent === "80%" ? '80%' : ''}

`
// export const RangeChild2  = styled.div`
//     width:90%;
//     background-color: orangered;
//     height: 2px;
// `
// export const RangeChild3 = styled.div`
//     width:80%;
//     background-color: orangered;
//     height: 2px;

// `