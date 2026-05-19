import React from 'react'
import * as s from './style'
import { SectionTitle, SectionSubtitle, Card } from '../../styles/GlobalSection'
import { SiSoundcloud } from 'react-icons/si'

const testimonials = [
  {
    id: 1,
    name: 'Balanar',
    role: 'PRODUTOR DE FOREST',
    text: 'Depois das aulas de produção com a Psychedelic Lab, melhorei muito a minha concepção de mixagem e arranjo. As dicas de Serum 2 e os feedbacks nas minhas tracks foram fundamentais para evoluir.',
    avatar: '/balanar-depoimento-foto.webp',
    soundcloud: 'https://soundcloud.com/balanardj'
  },
  {
    id: 2,
    name: 'Symbiotronik',
    role: 'PRODUTOR DE HI-TECH',
    text: 'As aulas de produção e masterização profissional mudaram meu nível. Tive acompanhamento prático e teórico, incluindo revisão da minha track. Imprescindível para quem quer evoluir de verdade.',
    avatar: '/fenyang.webp',
    soundcloud: 'https://soundcloud.com/symbio-tronik'
  },
  {
    id: 3,
    name: 'O.A.K',
    role: 'PRODUTOR DE HIGH BPM',
    text: 'Fiz todas as aulas presencialmente com o Abner antes do Psychedelic Lab existir online. As aulas tiveram um impacto enorme na evolução do meu som, principalmente em identidade sonora, síntese e visão artística.',
    avatar: '/oak-foto.webp',
    soundcloud: 'https://soundcloud.com/obscureaudiokernel'
  }
]

const Testimonials = () => {
  return (
    <s.TestimonialsSection id="testimonials">
      <h2>DEPOIMENTOS</h2>
      <div className="container">
        <div className="blockblack">
          <SectionTitle>Depoimentos</SectionTitle>
          <SectionSubtitle>Quem aprende com a gente recomenda</SectionSubtitle>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <Card className="testimonial-card" key={item.id}>
                <div className="avatar">
                  <img src={item.avatar} alt={item.name} width="80" height="80" style={{ borderRadius: "50%" }} />
                </div>
                <div className="content">
                  <p className="text">{`"${item.text}"`}</p>
                  <div className="name-wrapper">
                    <h4 className="name">{item.name}</h4>
                    {item.soundcloud && (
                      <a aria-label="Link de navegação" href={item.soundcloud} target="_blank" rel="noopener noreferrer" className="soundcloud-link">
                        <SiSoundcloud size={28} color="#ff5500" />
                      </a>
                    )}
                  </div>
                  <span className="role">{item.role}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </s.TestimonialsSection>
  )
}

export default Testimonials