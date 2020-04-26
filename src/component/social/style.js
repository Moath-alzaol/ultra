import styled from 'styled-components'


export const Social1 = styled.div`
    display: flex;
    font-family: auto;
`
export const Media = styled.div`
    padding: 100px 0 100px 60px;
    width: 100%;
    display: flex;
    background : ${props => props.id === 1 ? "#3b5998" : props.id === 2 ? '#498cbf' : props.id === 3 ? "#cc2127" : ""}
`
// export const Tweet = styled.div`
//     background: #498cbf;
//     width: 100%;
//     padding: 100px 0 100px 60px;
//     display: flex;
// `

// export const Tube = styled.div`
//     background: #cc2127;
//     width: 100%;
//     padding: 100px 0 100px 60px;
//     display: flex;
// `
export const Icon = styled.div`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    color: #888;
    margin-right: 10px;
    &:before {
        top: 15px;
        position: relative;
    }
`
export const Des = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    margin : 0px
`
export const Des1  = styled.span`
    display: block;
    margin-bottom: 8px
`
