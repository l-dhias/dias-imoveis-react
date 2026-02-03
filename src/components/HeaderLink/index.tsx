import { HeaderContainer, Link, Title } from './styles'

import logo1 from '../../assets/images/logo.png'

const HeaderLink = () => (
  <HeaderContainer>
    <div className="container">
      <Title>Restaurantes</Title>
      <a href="/">
        <img width="126px" height="58px" src={logo1} alt="efood" />
      </a>
      <Link href="#">0 produto(s) no carrinho</Link>
    </div>
  </HeaderContainer>
)

export default HeaderLink
