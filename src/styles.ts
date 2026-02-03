import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#fff',
  cinzaTexto: '#8f8f8fff',
  fundo: '#FFF8F2',
  preto: '#000',
  vermelho: ' #E66767',
  bege: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
    }

  body {
    background-color: ${cores.fundo};
    color: ${cores.cinzaTexto};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;
    }
  `
