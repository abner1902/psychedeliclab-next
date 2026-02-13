import React from 'react'
import * as s from './style'
import { SectionTitle, Card } from '../../styles/GlobalSection'

const Telegram = () => {
  return (
    <s.TelegramWrapper id="telegram">
      <div className="container">
        <div className="blockblack">
          <SectionTitle>📢 Nossa Comunidade</SectionTitle>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <Card className="telegram-card">
                {/* Ícone grande do Telegram */}
                <div className="telegram-icon-wrapper">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <path d="M9.417 15.181L11.5 21.5L20 4L4 9.5L9.417 12.181L15.5 8L9.417 15.181Z" fill="#ffc107"/>
                  </svg>
                </div>

                <p className="telegram-description">
                  Entre agora na comunidade gratuita no Telegram,<br />
                  e receba Links Free, Samples, Feedbacks e muito mais.<br />
                  Conecte-se com a galera na mesma sintonia de psicodelizar.
                </p>

                <a 
                  href="https://t.me/psychedeliclab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="telegram-button"
                  aria-label="Entrar no grupo do Telegram"
                >
                  <span>Entrar no Grupo</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9.417 15.181L11.5 21.5L20 4L4 9.5L9.417 12.181L15.5 8L9.417 15.181Z" fill="currentColor"/>
                  </svg>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </s.TelegramWrapper>
  )
}

export default Telegram
