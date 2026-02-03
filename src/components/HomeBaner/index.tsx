import { Link } from 'react-router-dom'

import { HomeBar, Text, Logo } from './styles'

import logo1 from '../../assets/images/logo.png'

const HomeBaner = () => (
  <HomeBar>
    <Link to="/">
      <Logo width="126px" height="58px" src={logo1} alt="efood" />
    </Link>
    <Text>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Text>
  </HomeBar>
)

export default HomeBaner
