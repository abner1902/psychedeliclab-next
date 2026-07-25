import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Upload, AudioLines, SlidersHorizontal, Download } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "ENVIO",
    description: "Você envia sua premaster, referência sonora e observações."
  },
  {
    number: "02",
    icon: AudioLines,
    title: "ANÁLISE",
    description: "Análise técnica completa: tonalidade, dinâmica, estéreo, transientes, low-end e mais."
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "MASTERIZAÇÃO",
    description: "Processamento focado em pressão, clareza, equilíbrio e tradução, preservando a identidade da track."
  },
  {
    number: "04",
    icon: Download,
    title: "ENTREGA",
    description: "Entrega final em WAV de alta qualidade, pronto para qualquer sistema de som."
  }
]

const ProcessoMasterizacao = () => {
  return (
    <SectionWrapper
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <MainBox>
        <SectionHeader>
          <p className="section-eyebrow">DO ENVIO À ENTREGA FINAL</p>
          <h2 className="section-title">PROCESSO DE MASTERIZAÇÃO</h2>
        </SectionHeader>

        <StepsGrid as={motion.div} variants={itemVariants}>
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <React.Fragment key={step.number}>
                <StepItem>
                  <IconRow>
                    <NumberBadge>{step.number}</NumberBadge>
                    <IconCircle>
                      <Icon size={28} strokeWidth={1.8} />
                    </IconCircle>
                  </IconRow>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepItem>

                {index < steps.length - 1 && <Connector />}
              </React.Fragment>
            )
          })}
        </StepsGrid>

        <NoteBar>
          <span>
            Envie o link da sua música + uma referência de master que você goste (opcional) via WhatsApp.{" "}
            <strong>Prazo padrão: 48h.</strong> Precisa de urgência? Entrega no mesmo dia mediante taxa adicional.
          </span>
        </NoteBar>
      </MainBox>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  padding: 0 16px;
`

const MainBox = styled.div`
  width: 100%;
  max-width: 1278px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 30px;
  border: 1px solid rgba(250, 204, 21, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
  padding: 50px 40px;

  @media (max-width: 991px) {
    padding: 30px 16px;
  }
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  .section-eyebrow {
    font-size: 1rem;
    font-weight: 500;
    color: #facc15;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 14px;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 767px) {
      font-size: 0.85rem;
      letter-spacing: 2px;
    }
  }

  .section-title {
    font-size: 2.618rem;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: -1px;
    max-width: 900px;
    margin: 0 auto;
    font-family: 'Metropolis', sans-serif;
    @media (max-width: 767px) {
      font-size: 1.618rem;
    }
  }
`

const StepsGrid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`

const Connector = styled.div`
  flex: 1;
  height: 1.5px;
  background: linear-gradient(90deg, rgba(250, 204, 21, 0.4), rgba(250, 204, 21, 0.1));
  margin-top: 44px;
  min-width: 20px;

  @media (max-width: 991px) {
    display: none;
  }
`

const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 240px;
  flex-shrink: 0;
`

const IconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
`

const NumberBadge = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid rgba(250, 204, 21, 0.5);
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  color: #facc15;
  font-weight: 700;
  font-size: 1rem;
  font-family: 'Metropolis', sans-serif;
`

const IconCircle = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: 1.5px solid rgba(250, 204, 21, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #facc15;
`

const StepTitle = styled.h3`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-family: 'Metropolis', sans-serif;
`

const StepDescription = styled.p`
  color: #d4d4d8;
  font-size: 0.9rem;
  line-height: 1.6;
  font-weight: 400;
`

const NoteBar = styled.div`
  margin-top: 45px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;

  span {
    color: #d4d4d8;
    font-size: 0.9rem;
    line-height: 1.7;

    strong {
      color: #facc15;
      font-weight: 700;
    }
  }

  @media (max-width: 767px) {
    span {
      font-size: 0.85rem;
    }
  }
`

export default ProcessoMasterizacao
