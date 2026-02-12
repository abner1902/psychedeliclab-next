import React from 'react'
import * as s from './style'
import { Section, SectionTitle, SectionSubtitle, Card } from '../../styles/GlobalSection'

const testimonials = [
  {
    id: 1,
    name: 'Rafael M.',
    role: 'PRODUTOR MUSICAL',
    text: 'O Psychedelic Lab mudou completamente minha forma de produzir Darkpsy. Técnicas avançadas que não se acha em lugar nenhum.',
    avatar: '/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Camila S.',
    role: 'DJ & PRODUTORA',
    text: 'Alcancei um nível profissional em poucos meses. Mentoria direta e conteúdo exclusivo. Recomendo demais!',
    avatar: '/avatar2.jpg'
  },
  {
    id: 3,
    name: 'André L.',
    role: 'INICIANTE EM HI-TECH',
    text: 'Comecei do zero e hoje já lanço minhas tracks. A comunidade é incrível e o suporte é rápido.',
    avatar: '/avatar3.jpg'
  }
]

const Testimonials = () => {
  return (
    <s.TestimonialsSection id="testimonials">
      <Section>
        <div className="container">
          <SectionTitle>Depoimentos</SectionTitle>
          <SectionSubtitle>Quem aprende com a gente recomenda</SectionSubtitle>
          
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <Card className="testimonial-card" key={item.id}>
                <div className="avatar">
                  <img src={item.avatar} alt={item.name} />
                </div>
                <div className="content">
                  <p className="text">"{item.text}"</p>
                  <h4 className="name">{item.name}</h4>
                  <span className="role">{item.role}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </s.TestimonialsSection>
  )
}

export default Testimonials
