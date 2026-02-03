import { Banner } from './styles'

import bannerImg from '../../assets/images/fundo.png'
import Tag from '../Tag'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <div>
        <h2>Chalé Aurora</h2>
        <p>Diárias a partir de R$ 500,00</p>
        <button>Adicinar ao carrinho</button>
      </div>
    </div>
  </Banner>
)

export default Hero
