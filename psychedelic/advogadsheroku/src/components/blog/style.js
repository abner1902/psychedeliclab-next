import styled from 'styled-components'

export const Blog = styled.div`
    a{
        color: white;
    }
    li{

        list-style-type: none;    }
    .img-responsive{
        display: block;
        height: auto;
        max-width: 100%;
    }
    div{
        color: white;
    }
    h3{
        color: white;
        margin-bottom: 70px;
    }
    .blockblack {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    padding: 25px;
    }.blogevent {
    color: #ccc;
}
.blogevent ul {
    padding: 0;
    list-style: none;
    margin-top: 35px;
}

.blogevent ul li {
    font-size: 13px;
}

.blogevent ul li p {
    margin: 0;
    line-height: 18px;
}

.events ul li {
    background-color: #191919;
    margin-bottom: 1px;
}

.events ul li h5 {
    margin: 7px 0;
}

.events ul li .date {
    text-align: center;
    line-height: 38px;
    color: #444;
    text-shadow: 0px -1px 0px #000;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #111
}

.events ul li .date b {
    display: block;
    font-size: 30px;
}

.events ul li .date span {
    font-size: 22px;
}


.ourblog ul li {
    margin-bottom: 20px;
}

.ourblog ul li img {
    float: left;
    margin-right: 20px;
}

.ourblog ul li .blogtext {
    overflow: hidden;
}

/*blog*/




/*modal*/
.modal-dialog {
    max-width: 800px;
    width: 95%;
}

.modal-content {
    overflow: auto;
    padding: 0 20px;
    color: #444;
}

.modal-content h2 {
    color: #222;
    margin: 15px 0;
}

button.close {
    position: absolute;
    right: 0;
    background: #FFF;
    width: 25px;
    height: 25px;
    line-height: 9px;
}

#blog small {
    margin-bottom: 10px;
    display: block;
}



 
`
