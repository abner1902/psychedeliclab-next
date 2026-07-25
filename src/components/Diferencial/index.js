import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

const columns = [
  {
    heading: "EXPERIÊNCIA REAL DE PISTA",
    blocks: [
      {
        strong: "DJ desde 2009 e produtor:",
        text: " Vivência profunda dentro da cultura sound system e nas pistas do underground."
      },
      {
        strong: "Pistas Nacionais e Internacionais:",
        text: " Passagem por palcos como Universo Paralello (303 Stage), Torus Festival e Primitif Festival (Marrocos)."
      },
      {
        strong: "Foco:",
        text: " O som é tratado pensando em como ele se comporta em um P.A. pesado de festival, e não apenas em monitores de estúdio."
      }
    ]
  },
  {
    heading: "VISÃO DE LABEL OWNER",
    blocks: [
      {
        strong: "Fundador da Agya Sounds:",
        text: " Gravadora independente com lançamentos oficiais ativos no mercado underground global."
      },
      {
        strong: "Curadoria e Exigência:",
        text: " Compreensão exata do padrão técnico que as grandes gravadoras buscam para aprovar um release."
      },
      {
        strong: "Foco:",
        text: " Alinhar a sua track com o nível de entrega que o mercado profissional exige no digital e no físico."
      }
    ]
  },
  {
    heading: "EQUILÍBRIO TÉCNICO & ARTE",
    blocks: [
      {
        strong: "Feito por produtor:",
        text: " Zero automação cega de algoritmos. Cada ajuste é guiado por análise humana e técnica."
      },
      {
        strong: "Loudness Competitivo:",
        text: " Baixo peso (low-end) blindado e sub-graves sólidos sem sacrificar a dinâmica do kick e bass."
      },
      {
        strong: "Foco:",
        text: " Potencializar clareza e impacto físico preservando totalmente a identidade artística da sua track."
      }
    ]
  }
]

const Diferencial = () => {
  return (
    <SectionWrapper
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <MainBox>
        <SectionHeader>
          <p className="section-eyebrow">DIFERENCIAL</p>
          <h2 className="section-title">PORQUE MASTERIZAR COM A PSYCHEDELIC LAB?</h2>
        </SectionHeader>

        <ColumnsGrid>
          {columns.map((column) => (
            <Column key={column.heading} as={motion.div} variants={itemVariants}>
              <ColumnHeading>{column.heading}</ColumnHeading>
              <ColumnText>
                {column.blocks.map((block, index) => (
                  <p key={index}>
                    <strong>{block.strong}</strong>
                    {block.text}
                  </p>
                ))}
              </ColumnText>
            </Column>
          ))}
        </ColumnsGrid>
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

const ColumnsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 45px;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ColumnHeading = styled.h3`
  color: #facc15;
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 0.5px;
  margin-bottom: 22px;
  font-family: 'Metropolis', sans-serif;

  @media (max-width: 767px) {
    font-size: 1.1rem;
  }
`

const ColumnText = styled.div`
  p {
    color: #d4d4d8;
    font-size: 1rem;
    line-height: 1.7;
    font-weight: 400;
    margin: 0 0 20px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: #ffffff;
    font-weight: 700;
  }

  @media (max-width: 767px) {
    p {
      font-size: 0.9rem;
    }
  }
`

export default Diferencial
