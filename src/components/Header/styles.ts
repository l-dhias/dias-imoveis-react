import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${cores.cinzaTexto};
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;

  a {
    display: inline-block;
    transition: all 0.25s ease-out;
    font-weight: 400;
  }

  &:hover a {
    color: ${cores.branco};
    font-weight: 500;
    transform: scale(1.02);
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  }
`
export const LinkCard = styled.a`
  display: flex;
  margin-left: 16px;
`
