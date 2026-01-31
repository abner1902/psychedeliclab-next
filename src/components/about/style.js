import styled from 'styled-components'

export const About = styled.section`
/* 1. O CONTAINER: Centraliza e organiza o conteúdo */
.homeinfo {
    padding: 180px 0 80px 0; /* Diminuí para 180px para não ficar tão baixo */
    display: flex;
    flex-direction: row;      /* Texto na esquerda, Vídeo na direita */
    align-items: flex-start;  /* ALINHAMENTO POR CIMA (Nivelados pelo topo) */
    justify-content: center;  /* Centraliza o par no meio do site */
    gap: 50px;                /* Espaço fixo para o vídeo não encostar no texto */
    flex-wrap: nowrap;        /* Impede o vídeo de pular para baixo no desktop */
    max-width: 1200px;        /* Limite de largura do site */
    margin: 0 auto;           /* Centraliza tudo na tela */

    @media (max-width: 900px) {
        flex-direction: column; /* No celular, um fica em cima do outro */
        align-items: center;
        padding: 120px 20px 40px 20px;
    }
}

/* 2. BLOCO DE TEXTO (Lado Esquerdo) */
.fronttext {
    background: rgba(0, 0, 0, 0.85); 
    border-radius: 15px;
    padding: 35px;           
    flex: 0 1 500px;          /* Ocupa no máximo 500px */
    z-index: 2;
}

.fronttext h1 {
    font-size: 42px;   
    line-height: 1.1;
    color: white;
    margin: 0 0 15px 0; 
    white-space: nowrap;      /* Mantém o DARKPSY PORTAL em uma linha */
    
    @media (min-width: 600px) {
        font-size: 52px;      /* Tamanho premium no desktop */
    }
}

.fronttext p {
    color: white;       
    font-size: 1.05rem;
    line-height: 1.6;
    margin: 0;
}

/* 3. O VÍDEO (Lado Direito) */
.homeinfo .player {
    flex: 0 1 560px;          /* Ocupa no máximo 560px */
    position: relative;
    margin-top: 0;            /* Reset para alinhar perfeitamente com o texto */
    z-index: 2;
}

/* Se for um iframe do YouTube, garanta que ele responda ao tamanho */
.homeinfo .player iframe {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

/* Elemento gráfico atrás do vídeo */
.homeinfo .player img.graphics {
    position: absolute;
    bottom: -30px;
    right: -25px;
    z-index: -1;
    width: 130px;
}

.overlay {
    z-index: 100;
    position: relative;
}
`