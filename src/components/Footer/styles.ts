import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  padding: 32px 0;
  font-size: 14px;
  background-color: ${cores.bege};
`

export const Logo = styled.img`
  display: flex;
  margin: 0 auto;
  padding-top: 40px;
`

export const Links = styled.ul`
  display: flex;
  margin: 0 auto;
  margin-top: 16px;
`
export const Link = styled.a`
  text-decoration: none;
  margin-right: 8px;

  img {
    width: 24px;
    height: 24px;
`
export const FooterSection = styled.div`
  padding-top: 32px;
  padding-bottom: 80px;
  display: flex;
  margin: 0 auto;
`
export const Paragraph = styled.p`
  color: ${cores.vermelho};
  text-align: center;
  font-size: 10px;
  padding-bottom: 40px;
`
