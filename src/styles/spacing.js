/**
 * Sistema de espaçamento — grid de 8px (escala harmônica para UI)
 * 1u = 8px | 2u = 16px | 3u = 24px | 4u = 32px | 6u = 48px | 8u = 64px
 */
export const UNIT = 8

export const space = {
  1: UNIT,       // 8px
  2: UNIT * 2,   // 16px
  3: UNIT * 3,   // 24px
  4: UNIT * 4,   // 32px
  5: UNIT * 5,   // 40px
  6: UNIT * 6,   // 48px
  8: UNIT * 8    // 64px
}

export const mobile = {
  breakpoint: '767px',
  sectionY: space[6],      // 48px — respiro entre seções
  sectionYFirst: space[3], // 24px — topo da primeira seção
  containerX: space[2],    // 16px — margem lateral da página
  blockPad: space[3],      // 24px — padding interno dos blocos
  blockRadius: space[2],   // 16px — cantos dos blocos
  titleMb: space[3],       // 24px — abaixo de títulos
  subtitleMb: space[4],    // 32px — abaixo de subtítulos
  stackGap: space[3],      // 24px — entre cards/itens empilhados
  itemGap: space[2],       // 16px — entre elementos pequenos
  rowGap: space[4]         // 32px — entre colunas empilhadas
}

export const desktop = {
  breakpoint: '768px',
  sectionY: space[8],      // 64px — respiro entre seções
  sectionYFirst: space[6], // 48px — topo da primeira seção
  containerX: 20,          // 20px — margem lateral (harmonia com 1200px container)
  blockPadY: space[5],     // 40px — padding vertical dos blocos
  blockPadX: 25,           // 25px — padding horizontal dos blocos
  blockRadius: 15,         // 15px — cantos dos blocos
  titleMb: space[4],       // 32px — abaixo de títulos
  subtitleMb: 60,          // 60px — abaixo de subtítulos (SectionSubtitle)
  stackGap: 30,            // 30px — grids e listas
  itemGap: space[3],       // 24px — elementos internos
  rowGap: space[5],        // 40px — entre colunas
  gridGap: 30              // 30px — testimonials-grid etc.
}
