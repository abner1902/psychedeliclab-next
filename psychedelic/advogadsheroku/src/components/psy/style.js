import styled from 'styled-components'

export const Psy = styled.div`
    color: white;

    .blockblack {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    padding: 25px;
}

.fronttext h2 {
    font-size: 60px;
    line-height: 60px;
    display: inline-block;
    padding: 5px 10px;
    color: #666666;
}
p{

    margin-top: 49px;
    @media(min-width: 600px){
    margin-top: 0px;
    }
}

.fronttext p {
    margin: 0;
    background-color: rgba(255, 255, 255,100%);
    color: white;
    display: inline-block;
    padding: 10px;
    margin-top: 10px;
   
}

.overlay {
    z-index: 100;
    position: relative;
}.img-responsive{
    display: block;
    height: auto;
    max-width: 100%;
}

`