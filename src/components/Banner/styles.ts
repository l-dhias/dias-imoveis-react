import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${cores.preto};
    opacity: 0.5;
    z-index: 1;
  }

  .container {
    height: 100%;
  }
`
export const BannerImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`
export const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${cores.branco};
`

export const BannerTitle = styled.h2`
  font-size: 32px;
  font-weight: 100;
  margin-top: 24px;
`

export const BannerText = styled.p`
  font-size: 32px;
  margin-bottom: 32px;
  font-weight: bold;
`
