import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { 
  Trees, 
  Bot, 
  Skull, 
  Activity, 
  Factory, 
  Home 
} from "lucide-react"

const estilosData = [
  { name: "DARKPSY", svgPath: "/darkpsy-icon.svg" },       // Seu SVG do Darkpsy
  { name: "FOREST", icon: Trees },          
  { name: "HI-TECH", icon: Bot }, 
  { name: "PSYCORE", icon: Skull },
  { name: "PROG DARK", svgPath: "/prog-dark-icon.svg" },     // Seu SVG de Prog Dark
  { name: "FULL ON", svgPath: "/fullon-icon.svg" },           // Seu SVG do OM
  { name: "DRUM N` BASS", svgPath: "/drum-bass-icon.svg" },   // Seu SVG de Bateria
  { name: "PROGRESSIVE", icon: Activity },  
  { name: "TECHNO", icon: Factory },        
  { name: "HOUSE", icon: Home },             
]

const EstilosAtendidos = () => {
  return (
    <SectionWrapper>
      <ContainerCard
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-header">
          <h2 className="section-title">ESTILOS ATENDIDOS</h2>
          <SubText>
            Outros estilos eletrônicos podem ser atendidos mediante referência sonora.
          </SubText>
        </div>

        <GridWrapper>
          {estilosData.map((item, index) => {
            const IconComponent = item.icon
            return (
              <StyleCard 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(250, 204, 21, 0.35), inset 0 0 15px rgba(250, 204, 21, 0.15)",
                  borderColor: "rgba(250, 204, 21, 0.9)"
                }}
              >
                <div className="card-glow-bg" />
                <div className="icon-box">
                  {item.svgPath ? (
                    <img src={item.svgPath} alt={item.name} className="custom-svg-icon" />
                  ) : (
                    <IconComponent size={44} strokeWidth={1.8} />
                  )}
                </div>
                <span className="style-name">{item.name}</span>
              </StyleCard>
            )
          })}
        </GridWrapper>
      </ContainerCard>
    </SectionWrapper>
  )
}

export default EstilosAtendidos

const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 20px;
`

const ContainerCard = styled(motion.div)`
  width: 100%;
  max-width: 1280px;
  background: rgba(8, 8, 10, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 31px;
  border: 1px solid rgba(250, 204, 21, 0.15);
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05);

  @media (max-width: 991px) {
    padding: 40px 20px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 50px;

    .section-title {
      font-size: clamp(2.5rem, 4vw, 3.8rem);
      font-weight: 950;
      color: #facc15;
      text-transform: uppercase;
      letter-spacing: -1px;
      margin-bottom: 16px;
      -webkit-text-stroke: 0.6px #facc15;
    }
  }
`

const SubText = styled.div`
  font-size: 1.1rem;
  color: #d4d4d8;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.8px;
  opacity: 0.85;
  max-width: 800px;
  margin: 0 auto;
  display: block;
  text-align: center;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  width: 100%;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const StyleCard = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 215px;
  height: 200px;
  background: linear-gradient(135deg, rgba(20, 20, 24, 0.9) 0%, rgba(5, 5, 7, 0.95) 100%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 22px;
  border: 1px solid rgba(250, 204, 21, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.08);

  .card-glow-bg {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center top, rgba(250, 204, 21, 0.12) 0%, transparent 70%);
    pointer-events: none;
  }

  .icon-box {
    color: #facc15;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 0 10px rgba(250, 204, 21, 0.4));
    transition: transform 0.3s ease;

    .custom-svg-icon {
      width: 44px;
      height: 44px;
      object-fit: contain;
      filter: drop-shadow(0 0 8px rgba(250, 204, 21, 0.5));
    }
  }

  .style-name {
    color: #ffffff;
    font-size: 1.05rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    text-align: center;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  &:hover {
    .icon-box {
      transform: scale(1.1);
    }
  }
`