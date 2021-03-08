import styled from 'styled-components'

export const Feed = styled.section`
    color: white!important;
    
    .blockblack {
    background: rgba(0, 0, 0, 0.8);
    padding: 25px;
    height: 800px;
    border-color: none;
    @media (min-width: 600px) {
        height: 600px;
    }.telegram{
    position: relative;
    top: 100px;

    @media(min-width: 600px){
        /* position: relative;
        right: -180px;
        margin-top: 50px;
         margin-top: 49px; */
        /* width: 296px; */
        height: 219px;
        right: -138px;
                position: relative;
        border-radius: 29px;     
    }
    }.telegram-button{
        background-color: #32afed;
        border-radius: 12px;
        margin: 0px 0px;
        position: relative;
        top: 59px;
        padding: 7px 39px;
        display: block;
        color: white;
        padding: 20px 77px;

        @media(min-width: 600px){
        background-color: #32afed;
        border-radius: 12px;
        margin: 0px 42px;
        position: relative;
        top: 59px;
        padding: 7px 39px;
        display: block;
        color: white;
        padding: 20px 77px;
        }
    }p{
        right: 0px;
        font-size: 21px;
        /* margin-top: 100px; */

    @media(min-width: 600px){
        position: relative;
        right: -60px;
    }
    }img{
        width: 291px!important;
        margin-left: auto;
        margin-right: auto;
        border-radius: 12px;
        position: relative;
        right: 0px;
        top: 100px;
        font-size: 51px;
        @media(min-width: 600px){
            width: 400px;
            right: -100px;

        }
    }#telegram{
        justify-content: center;
    }h4{
        text-align: center;
        position: relative;
        font-size: 48px;
        top: -13px;
        @media(min-wdith: 600px){
        text-align: center;
        /* margin-top: 100px; */
        position: relative;
        top: -100px;
        font-size: 56px;
        }
    }
`