import styled from 'styled-components'

import bannerImg from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-image: url(${bannerImg});
  display: flex;
  color: ${cores.vermelho};
  height: 186px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Title = styled.h3`
  display: flex;
  align-items: center;git branch -m novo-nome

  font-weight: bold;
`
export const Link = styled.a`
  display: flex;
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: bold;
`
