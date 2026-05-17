import styled from 'styled-components'

export const Blog = styled.div`
    a{
        color: white;
        @media (min-width: 600px) {
        
    }
    }
    li{
    list-style-type: none;}
    .img-responsive{
        display: block;
        height: auto;
        max-width: 100%;
        @media (min-width: 600px) {
        
    }
    }.img-responsive-1{
        display: block;
        height: auto;
        max-width: 100%;
        @media(min-width: 600px){
            width: 221px!important;

        }
    }    
        
    div{
        color: white;
        @media (min-width: 600px) {
        
    }
    }
    h3{
        color: white;
        margin-bottom: 70px;
        margin-left: 39px;
    }

    @media (min-width: 768px) {
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .blockblack {
            background: rgba(0, 0, 0, 0.8);
            border-radius: 15px;
            padding: 40px 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            max-width: 1200px;
            margin: 0 auto;
        }
    }.blogevent {
    color: #ccc;
    @media (min-width: 600px) {
        
    }
}
.blogevent ul {
    padding: 0;
    list-style: none;
    margin-top: 35px;
    @media (min-width: 600px) {
        
    }
}

.blogevent ul li {
    font-size: 13px;
    @media (min-width: 600px) {
        
    }
}

.blogevent ul li p {
    margin: 0;
    line-height: 18px;
    @media (min-width: 600px) {
        
    }
}

.events {
    width: 100%;
}

.events-title {
    margin-left: 0 !important;
    margin-bottom: 24px !important;
    text-align: center;
}

.download-list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

.download-item {
    display: grid;
    grid-template-columns: 72px 1fr 48px;
    gap: 12px;
    align-items: center;
    width: 100%;
    background-color: #191919;
    margin-bottom: 1px;
    padding: 10px 12px;
    box-sizing: border-box;
}

.download-thumb {
    display: block;
    width: 72px;
    flex-shrink: 0;
}

.download-thumb img {
    display: block;
    width: 100%;
    height: auto;
    max-width: 72px;
}

.download-info {
    min-width: 0;
}

.download-info h5 {
    margin: 0 !important;
    padding: 0 !important;
    text-align: left !important;
    font-size: 14px;
    line-height: 1.4;
}

.download-action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background-color: #111;
    color: #fff;
    flex-shrink: 0;
}

.download-action svg {
    font-size: 28px;
}

@media (max-width: 575px) {
    .download-item {
        grid-template-columns: 64px 1fr 40px;
        gap: 10px;
        padding: 10px;
    }

    .download-thumb {
        width: 64px;
    }

    .download-thumb img {
        max-width: 64px;
    }

    .download-action {
        width: 40px;
        height: 40px;
    }

    .download-action svg {
        font-size: 24px;
    }
}

@media (min-width: 768px) {
    .events-title {
        margin-left: 39px !important;
        margin-bottom: 70px !important;
        text-align: left;
    }

    .download-item {
        grid-template-columns: 100px 1fr 56px;
        gap: 16px;
        padding: 12px 16px;
    }

    .download-thumb {
        width: 100px;
    }

    .download-thumb img {
        max-width: 100px;
    }

    .download-info h5 {
        font-size: 15px;
    }
}


.ourblog {
    width: 100%;
}

.ourblog-title {
    margin-left: 0 !important;
    margin-bottom: var(--title-mb, 24px) !important;
    text-align: center;
}


.blog-list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

.blog-item {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--item-gap, 16px);
    margin-bottom: var(--stack-gap, 24px);
    width: 100%;
}

.blog-thumb {
    display: block;
    width: 100%;
}

.blog-thumb img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
}

.blog-content {
    width: 100%;
    min-width: 0;
}

.blog-content h5 {
    margin: 0 0 8px;
    font-size: 16px;
}

.blog-content p {
    margin: 0;
    line-height: 1.5;
    color: #ccc;
    font-size: 14px;
}

@media (min-width: 768px) {
    .ourblog-title {
        margin-left: 39px !important;
        margin-bottom: 70px !important;
        text-align: left;
    }

    .blog-item {
        grid-template-columns: 140px 1fr;
        align-items: start;
        gap: 20px;
    }
}

#blogevent > .row {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
}

#blogevent .col-md-6,
#blogevent .col-md-5 {
    width: 100%;
    max-width: 100%;
}

@media (min-width: 768px) {
    #blogevent .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }

    #blogevent .col-md-5 {
        flex: 0 0 41.666667%;
        max-width: 41.666667%;
    }
}

/*blog*/




/*modal*/
.modal-dialog {
    max-width: 800px;
    width: 95%;
    @media (min-width: 600px) {
        
    }
}

.modal-content {
    overflow: auto;
    padding: 0 20px;
    color: #444;
    @media (min-width: 600px) {
        
    }
}

.modal-content h2 {
    color: #222;
    margin: 15px 0;
    @media (min-width: 600px) {
        
    }
}

button.close {
    position: absolute;
    right: 0;
    background: #FFF;
    width: 25px;
    height: 25px;
    line-height: 9px;
    @media (min-width: 600px) {
        
    }
}

#blog small {
    margin-bottom: 10px;
    display: block;
    @media (min-width: 600px) {
        
    }
}
 
`
