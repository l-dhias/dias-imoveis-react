import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link href="#">Urbanho </Link>
          </li>
          <li>
            <Link href="#">Comércio</Link>
          </li>
          <li>
            <Link href="#">Chalés</Link>
          </li>
          <li>
            <Link href="#">Rual</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link href="#">Novidades </Link>
          </li>
          <li>
            <Link href="#">Promoções</Link>
          </li>
          <li>
            <Link href="#">Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        {currentYear} - &copy; E_PLAY Todos os direitos reservados -
        Desenvolvido por Leonardo Dias
      </p>
    </div>
  </Container>
)

export default Footer
