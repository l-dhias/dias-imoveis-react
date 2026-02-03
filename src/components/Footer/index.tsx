import {
  Container,
  FooterSection,
  Link,
  Logo,
  Links,
  Paragraph
} from './styles'

import logo from '../../assets/images/logo.png'

import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import x from '../../assets/images/x.png'

const Footer = () => (
  <Container>
    <div className="container">
      <Logo src={logo} alt="Logo da empresa" />
      <FooterSection>
        <Links>
          <li>
            <Link href="#">
              <img src={instagram} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src={facebook} alt="Facebook " />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src={x} alt="X" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <Paragraph>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </Paragraph>
    </div>
  </Container>
)

export default Footer
