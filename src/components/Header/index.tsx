import { HeaderBar, Link, LinkCard, LinkItem } from './styles'

import logo from '../../assets/images/logo.jpg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img width="100px" height="40px" src={logo} alt="D imóveis" />
      <nav>
        <Link>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Link>
      </nav>
    </div>
    <LinkCard href="#">
      0
      <img src={carrinho} alt="carrinho" />
    </LinkCard>
  </HeaderBar>
)

export default Header
