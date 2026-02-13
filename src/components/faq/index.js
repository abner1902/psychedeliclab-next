import React from 'react'
import * as s from './style.js'
import Accordion from '../Accordion'

const Faq = () => {
  return (
    <s.Faq id="faq"> 
      <div className="container">
        <div className="blockblack">
          <h6><strong>PERGUNTAS FREQUENTES SOBRE O CURSO DE DARKPSY</strong></h6>
          <div className="container">
            <div style={{ width: '100%', marginTop: '80px' }}>
              <Accordion summary="O Curso é gravado? Como eu tenho acesso ao conteúdo?">
                O curso de Darkpsy é 100% gravado, voce terá acesso vitalício, e mais surpresas na sua área de membros. O login é enviado para seu e-mail imediatamente após a confirmação da compra.
              </Accordion>
              <Accordion summary="Qual é o conhecimento de produção que preciso ter?">
                O Curso de Darkpsy é divido em 3 módulos, o primeiro módulo é para voce iniciante, que esta começando a produzir a pouco tempo, o segundo modulo já é um pouco mais avançado, já vai precisar de mais plugins instalados na máquina, e o terceiro módulo é o mais complexo, abordando temas mais profundos do Darkpsy, já é necessário uma experiencia de 6 meses a 1 ano na produção.
              </Accordion>
              <Accordion summary="Qual software é utilizado no curso?">
                O software utilizado é o logic X, mas você consegue acompanhar com qualquer outro, contando com que voce já saiba mexer o mínimo, em sua plataforma de produção, seja ela Ableton, Cubase, Fruitloops, bitwig, o software é uma ferramenta. Os plugins mais  utilizados são, Serum, Sylenth, Kick2, pacote Waves, pacote fab filter.
              </Accordion>
              <Accordion summary="No Curso de Darkpsy da Psychedelic LAB vou aprender qual estilo de música?">
                O conhecimento do Curso de Darkpsy, permite voce criar qualquer estilo de música, porem o foco das aulas são as técnicas, de compressão, de stereo, dicas para seu Low End, técnicas básicas e avançadas, com isso voce terá mais base pra produzir, progressive dark, hi tech, full on night, forest, psycore, suomi, vai depender da sua dedicação e aplicação nas suas produções.
              </Accordion>
              <Accordion summary="Quando começam as aulas?">
                Após adquirir o curso de darkpsy, se tiver sido comprado com cartão de crédito, em alguns minutos você ira receber os dados de acesso pelo e-mail em alguns instantes, se voce gerou o boleto, voce recebe assim que confirmar o pagamento.
              </Accordion>
              <Accordion summary="Quais as formas de pagamento do Curso de Darkpsy?">
                Nós utilizamos a plataforma Hotmart como intermediador do curso. Aonde terá segurança no pagamento, 30 dias de garantia, e pode parcelar o pagamento em até 12 vezes.
              </Accordion>
              <Accordion summary="Como é o suporte do Curso de Darkpsy?">
                Nós iremos garantir que você, sempre receba conteúdos novos e relevantes, para qualquer estagio da produção de darkpsy e vertentes. Alem de participar de grupos no facebook, aonde terá outros membros aonde a troca de informações é mais compartilhada.
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </s.Faq>
  )
}

export default Faq
