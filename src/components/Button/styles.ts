import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  color: ${cores.bege};
  background-color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  width: 82px;
  height: 24px;
  color: ${cores.bege};
  background-color: ${cores.vermelho};
  font-size: 14px;
  font-weight: bold;
  padding: 8px 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`
