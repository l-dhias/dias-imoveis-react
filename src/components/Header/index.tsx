import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkCard, LinkItem } from './styles'

import logo from '../../assets/images/logo.jpg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img width="100px" height="40px" src={logo} alt="D imóveis" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias </Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCard href="#">
      0
      <img src={carrinho} alt="carrinho" />
    </LinkCard>
  </HeaderBar>
)

export default Header
