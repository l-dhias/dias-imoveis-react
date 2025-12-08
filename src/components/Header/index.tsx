import { HeaderBar } from './styles'
import logo from '../../assets/images/logo.jpg'

const Header = () => (
  <HeaderBar>
    <img
      width="100px"
      height="40px"
      src={logo}
      alt="D imóveis

    "
    />
  </HeaderBar>
)

export default Header
