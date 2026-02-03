import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Avaliacao, Card, CardContainer } from '../Dishes/styles'
import { ButtonLink } from '../Button/styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Container = styled.section<Omit<Props, 'title' | 'food'>>`
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.backgroundColor === 'white' ? cores.branco : cores.vermelho};
    color: ${(props) => (props.color === 'bege' ? cores.bege : cores.vermelho)};
    border: none;
  }
  ${CardContainer} {
    border: ${(props) =>
      props.border === 'solid' ? `2px solid ${cores.vermelho}` : 'none'};
    border-top: none;
  }

  ${ButtonLink} {
    background-color: ${(props) =>
      props.backgroundColor === 'red' ? cores.bege : cores.vermelho};
    color: ${(props) => (props.color === 'bege' ? cores.vermelho : cores.bege)};

    width: ${(props) => (props.button === 'big' ? '95%' : '120px')};
  }

  ${List} {
    grid-template-columns: ${(props) =>
      props.cardlist === 'large' ? '1fr 1fr 1fr' : ' 1fr 1fr'};
  }

  ${Avaliacao} {
    display: ${(props) => (props.icon === 'have' ? 'flex' : 'none')};
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
