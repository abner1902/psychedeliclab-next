import React from 'react'
import * as s from './style.js'
import Accordion from '../Accordion'

const Faq = () => {
  return (
    <s.Faq id="faq">
      <div className="container">
        <div className="blockblack">
          <h2>PERGUNTAS FREQUENTES</h2>
          <h3>Sobre o Curso de Darkpsy</h3>
          <div className="faq-content">
            <Accordion summary="O Curso é gravado? Como eu tenho acesso ao conteúdo?">
              O curso de Darkpsy é 100% gravado, você terá acesso vitalício, e mais surpresas na sua área de membros. O login é enviado para seu e-mail imediatamente após a confirmação da compra.
            </Accordion>

            <Accordion summary="Qual é o conhecimento de produção que preciso ter?">
              O Curso de Darkpsy é dividido em 3 módulos: o primeiro módulo é para você iniciante que está começando a produzir há pouco tempo; o segundo módulo já é mais avançado, exigindo mais plugins instalados na máquina; o terceiro módulo é o mais complexo, abordando temas profundos do Darkpsy, sendo necessário experiência de 6 meses a 1 ano na produção.
            </Accordion>

            <Accordion summary="Qual software é utilizado no curso?">
              O software utilizado é o Logic Pro X, mas você consegue acompanhar com qualquer outra DAW, desde que já saiba o mínimo na sua plataforma de produção (Ableton, Cubase, FL Studio, Bitwig). O software é uma ferramenta. Os plugins mais utilizados são: Serum, Sylenth, Kick2, pacote Waves e pacote FabFilter.
            </Accordion>

            <Accordion summary="No Curso de Darkpsy da Psychedelic LAB vou aprender qual estilo de música?">
              O conhecimento do Curso de Darkpsy permite criar qualquer estilo de música, porém o foco das aulas são as técnicas de compressão, stereo, dicas para seu Low End, técnicas básicas e avançadas. Com isso você terá mais base para produzir Progressive Dark, Hi-Tech, Full On Night, Forest, Psycore, Suomi. Dependerá da sua dedicação e aplicação nas produções.
            </Accordion>

            <Accordion summary="Quando começam as aulas?">
              Após adquirir o curso de Darkpsy com cartão de crédito, em alguns minutos você receberá os dados de acesso pelo e-mail. Se gerou boleto, receberá assim que o pagamento for confirmado.
            </Accordion>

            <Accordion summary="Quais as formas de pagamento do Curso de Darkpsy?">
              Utilizamos a plataforma Hotmart como intermediadora do curso, garantindo segurança no pagamento, 30 dias de garantia e parcelamento em até 12 vezes.
            </Accordion>

            <Accordion summary="Como é o suporte do Curso de Darkpsy?">
              Garantimos que você sempre receba conteúdos novos e relevantes para qualquer estágio da produção de Darkpsy e vertentes. Além de participar de grupos no Facebook, onde a troca de informações é mais compartilhada.
            </Accordion>
          </div>
        </div>
      </div>
    </s.Faq>
  )
}

export default Faq