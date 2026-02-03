import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 48px;
  border-radius: 8px;
  position: relative;

  background-color: ${cores.branco};
  color: ${cores.vermelho};

  ${TagContainer} {
    margin-right: 8px;
    padding: 4px 8px;
  }

  img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  ${ButtonLink} {
    text-align: center;
    margin-top: auto;
    padding: 4px 6px;
    margin-bottom: 8px;
    margin-left: 8px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  display: block;
  margin: 8px 0 8px 8px;
`

export const Descricao = styled.p`
  line-height: 22px;
  display: flex;
  margin: 16px 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const LinhaTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    width: 16px;
    height: 16px;
    margin: 8px;
  }
`
export const Nota = styled.p`
  font-size: 18px;
  font-weight: bold;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 2px solid ${cores.vermelho};
  border-top: none;
`
