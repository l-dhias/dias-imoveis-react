import styled from 'styled-components'
import { cores } from '../../styles'

import bannerImg from '../../assets/images/fundo.png'

export const HomeBar = styled.header`
  background-image: url(${bannerImg});
  height: 384px;
  padding-top: 40px;
  display: block;
  padding-bottom: 20px;
`

export const Logo = styled.img`
  margin: 0 auto;
  display: block;
`

export const Text = styled.p`
  color: ${cores.vermelho};
  font-size: 36px;
  font-weight: bold;
  margin-top: 136px;
  margin-bottom: 40px;
  text-align: center;
`
