import styled from 'styled-components'

export const About = styled.section`
        border: solid;
        height: 850px;
        background-color: #8b4513;
    @media only screen and (min-width: 600px) {
        border: solid;
        height: 650px;
        background-color: #8b4513;
}
    .about{

    }.about__title{
    text-align: center;
    margin-top: 100px;
    @media only screen and (min-width: 600px) {
    text-align: center;
    position: relative;
    margin-top: 100px;
    color: #000000;
}
    
    }.about__description{
    margin-top: 50px;
    text-align: center;
    margin: 20px 15px 0px 15px;

    @media (min-width: 600px) {
    color: #000000;
    text-align: center;
    margin-top: 100px;
    margin-left: 100px;
    margin-right: 100px;
    font-size:   18px;
    }
    
    }.wedo{
    margin-top: 100px;
    text-align: center;
    @media only screen and (min-width: 600px) {
    color: #000000;
    text-align: center;
    margin-top: 100px;
    margin-left: 100px;
    margin-right: 100px;
    font-size: 18px;
}
    }.wedo__title{

    }.wedo__description{
    margin: 20px 15px 0px 15px;
    }
`
