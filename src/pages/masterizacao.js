import React, { useEffect } from "react"
import Head from "next/head"
import styled from "styled-components"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import EstilosAtendidos from "../components/EstilosAtendidos"
import ProcessoMasterizacao from "../components/ProcessoMasterizacao"
import TrabalhosRecentes from "../components/TrabalhosRecentes"
import Diferencial from "../components/Diferencial"
import dynamic from "next/dynamic"
const AntesDepois = dynamic(() => import("../components/AntesDepois"), { ssr: false })
import { Container } from "react-bootstrap"

import { FiSend } from "react-icons/fi"
import { Ear, Gauge, Target, Speaker, AudioLines } from "lucide-react"

const smoothScrollTo = (targetId, offset = 100) => {
  const target = document.getElementById(targetId)
  if (!target) return

  const startY = window.pageYOffset
  const targetY = target.getBoundingClientRect().top + startY - offset
  const distance = targetY - startY
  const duration = 900
  let startTime = null

  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

  const step = (currentTime) => {
    if (startTime === null) startTime = currentTime
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * easeInOutCubic(progress))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const MasterizacaoPage = () => {
  useEffect(() => {
    document.body.classList.add('page-masterizacao');
    return () => {
      document.body.classList.remove('page-masterizacao');
    };
  }, []);

  return (
    <>
      <Head>
        <title>Masterização Profissional para Psytrance | Psychedelic Lab</title>
        <meta name="description" content="Master online para música eletrônica. Master feita por produtor, não por algoritmo." />
        <link rel="canonical" href="https://www.psychedeliclab.com.br/masterizacao" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.psychedeliclab.com.br/masterizacao" />
        <meta property="og:title" content="Masterização Profissional para Psytrance | Psychedelic Lab" />
        <meta property="og:description" content="Master online para música eletrônica. Master feita por produtor, não por algoritmo." />
        <meta property="og:image" content="https://www.psychedeliclab.com.br/masterizacao-thumb.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Masterização Profissional para Psytrance | Psychedelic Lab" />
        <meta name="twitter:description" content="Master online para música eletrônica. Master feita por produtor, não por algoritmo." />
        <meta name="twitter:image" content="https://www.psychedeliclab.com.br/masterizacao-thumb.jpg" />
      </Head>

      <Navbar />

      <MasterMain>
        <GlassOverlay>
          <Container 
            as={motion.div}
            className="master-container py-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* HERO CARD PRINCIPAL */}
            <HeroCard as={motion.div} variants={itemVariants}>
              <HeroContent>
                <div className="title-wrapper">
                  <span className="text-amber">MASTER ONLINE </span>
                  <span className="text-white">PARA MÚSICA ELETRÔNICA</span>
                </div>

                <p className="subtitle">
                  Sua música com a sonoridade dos artistas que te inspiram.{" "}
                  <strong className="text-amber">Master feita por produtor, não por algoritmo!</strong>
                </p>

                <div className="author-tag">
                  DJ DESDE 2009 | 10 ANOS MASTERIZANDO | + DE 200 TRACKS | ENTREGA EM 48H
                </div>

                <div className="cta-buttons">
                  <a href="https://wa.me/5511996670948?text=Fala%20Abner!%20Curti%20o%20Psychedelic%20Lab%20e%20quero%20solicitar%20uma%20master%20para%20minha%20track." target="_blank" rel="noopener noreferrer" className="btn-custom btn-yellow">
                    <FiSend className="icon-btn" /> SOLICITAR MASTER
                  </a>
                  <a
                    href="#ouvir"
                    className="btn-custom btn-gray"
                    onClick={(e) => {
                      e.preventDefault()
                      smoothScrollTo("ouvir", 100)
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                      transition={{ duration: 0.6, delay: 1.5, repeat: 0 }}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Ear className="icon-btn" />
                    </motion.div>
                    OUVIR ANTES / DEPOIS
                  </a>
                </div>
              </HeroContent>

              <HeroImageWrapper>
                <img 
                  src="/photo-masterizacao-hero.png" 
                  alt="Estúdio e Setup de Masterização - Psychedelic Lab" 
                  onError={(e) => { e.target.src = "https://placehold.co/381x381" }}
                />
              </HeroImageWrapper>
            </HeroCard>

            {/* BARRA DE DIFERENCIAIS INFERIOR */}
            <FeaturesBar as={motion.div} variants={itemVariants}>
              <FeatureItem>
                <div className="icon-box">
                  <Gauge size={34} strokeWidth={2} />
                </div>
                <div className="feature-text">
                  <strong>PRESSÃO</strong>
                  <span>COM CONTROLE</span>
                </div>
              </FeatureItem>

              <div className="divider" />

              <FeatureItem>
                <div className="icon-box">
                  <Target size={34} strokeWidth={2} />
                </div>
                <div className="feature-text">
                  <strong>CLAREZA</strong>
                  <span>E DEFINIÇÃO</span>
                </div>
              </FeatureItem>

              <div className="divider" />

              <FeatureItem>
                <div className="icon-box">
                  <Speaker size={34} strokeWidth={2} />
                </div>
                <div className="feature-text">
                  <strong>TRADUÇÃO</strong>
                  <span>EM QUALQUER SISTEMA SONORO</span>
                </div>
              </FeatureItem>

              <div className="divider" />

              <FeatureItem>
                <div className="icon-box">
                  <AudioLines size={34} strokeWidth={2} />
                </div>
                <div className="feature-text">
                  <strong>IDENTIDADE</strong>
                  <span>E INTENÇÃO ARTÍSTICAS</span>
                </div>
              </FeatureItem>
            </FeaturesBar>

            {/* SEÇÃO DE ESTILOS ATENDIDOS */}
            <EstilosAtendidos />

            {/* SEÇÃO DE ANTES E DEPOIS */}
            <AntesDepois />

            {/* SEÇÃO DE PROCESSO DE MASTERIZAÇÃO */}
            <ProcessoMasterizacao />

            {/* SEÇÃO DE TRABALHOS RECENTES */}
            <TrabalhosRecentes />

            {/* SEÇÃO DE DIFERENCIAL */}
            <Diferencial />

          </Container>
        </GlassOverlay>
      </MasterMain>
    </>
  )
}

const MasterMain = styled.main`
  background-image: url('/bg-masterizacao.jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 991px) {
    margin-top: -70px;
    padding-top: 70px;
    position: relative;
    z-index: 1;
  }
`;

const GlassOverlay = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(10, 10, 12, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  padding-top: 110px;
  padding-bottom: 80px;

  @media (max-width: 991px) {
    padding-top: 80px;
    padding-bottom: 50px;
  }

  .master-container {
    max-width: 1278px;
  }
`;

const HeroCard = styled.div`
  background: rgba(0, 0, 0, 0.92);
  border-radius: 30px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 35px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);

  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
    padding: 30px 16px;
    margin-left: 8px;
    margin-right: 8px;
    width: calc(100% - 16px);
  }
`

const HeroContent = styled.div`
  flex: 1;

  .title-wrapper {
    font-weight: 950;
    font-size: clamp(2.2rem, 4vw, 3.8rem);
    line-height: 1.1;
    margin-bottom: 24px;
    letter-spacing: -1px;

    .text-white {
      font-weight: 950;
      color: #ffffff;
      -webkit-text-stroke: 0.8px #ffffff;
    }
    .text-amber {
      font-weight: 950;
      color: #facc15;
      -webkit-text-stroke: 0.8px #facc15;
    }

    @media (max-width: 576px) {
      font-size: 1.9rem;
      letter-spacing: -0.5px;
    }
  }

  .subtitle {
    font-size: 1.2rem;
    color: #ffffff;
    line-height: 1.6;
    margin-bottom: 20px;
    font-weight: 400;

    .text-amber {
      color: #facc15;
      font-weight: 400;
    }
  }

  .author-tag {
    font-size: 0.85rem;
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-bottom: 35px;
    opacity: 0.95;
  }

  .cta-buttons {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    @media (max-width: 991px) {
      justify-content: center;
    }

    .btn-custom {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      width: 290px;
      height: 60px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 1.05rem;
      text-decoration: none;
      transition: all 0.4s ease;
      cursor: pointer;
      border: none;

      .icon-btn {
        font-size: 1.3rem;
      }

      @media (max-width: 480px) {
        width: 100%;
        max-width: 280px;
      }
    }

    .btn-yellow {
      background: #facc15;
      color: #000000;

      &:hover {
        background: #eab308;
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(250, 204, 21, 0.5);
      }
    }

    .btn-gray {
      background: #d4d4d8;
      color: #000000;

      &:hover {
        background: #a1a1aa;
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(212, 212, 216, 0.5);
      }
    }
  }
`

const HeroImageWrapper = styled.div`
  flex-shrink: 0;
  
  img {
    width: 381px;
    height: 381px;
    object-fit: cover;
    border-radius: 24px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7);
    border: 2px solid rgba(250, 204, 21, 0.2);

    @media (max-width: 991px) {
      width: 100%;
      max-width: 280px;
      height: auto;
      margin-top: 20px;
    }
  }
`

const FeaturesBar = styled.div`
  background: rgba(0, 0, 0, 0.92);
  border-radius: 22px;
  padding: 35px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 25px;
    align-items: flex-start;
    padding: 25px;
    margin-left: 8px;
    margin-right: 8px;
    width: calc(100% - 16px);
  }

  .divider {
    width: 1.5px;
    height: 60px;
    background: #d4d4d8;
    border-radius: 2px;
    opacity: 0.3;

    @media (max-width: 991px) {
      display: none;
    }
  }
`

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .icon-box {
    color: #facc15;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
  }

  .feature-text {
    display: flex;
    flex-direction: column;

    strong {
      color: #ffffff;
      font-size: 1.15rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    span {
      color: #ffffff;
      font-size: 0.85rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }
`

export default MasterizacaoPage